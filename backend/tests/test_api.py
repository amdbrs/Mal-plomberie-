import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

# Contact API tests

def test_api_root():
    r = requests.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    assert "message" in r.json()

def test_post_contact():
    payload = {
        "nom": "TEST_Jean Dupont",
        "telephone": "0620515430",
        "email": "test@example.com",
        "service": "plomberie",
        "message": "Test message for contact form"
    }
    r = requests.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert data["nom"] == payload["nom"]
    assert data["email"] == payload["email"]
    assert "id" in data
    assert "created_at" in data

def test_get_contacts():
    r = requests.get(f"{BASE_URL}/api/contacts")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    # Should contain at least the one we created
    assert len(data) >= 1

def test_post_contact_persisted():
    payload = {
        "nom": "TEST_Persist Check",
        "telephone": "0600000001",
        "email": "persist@example.com",
        "service": "chauffage",
        "message": "Persistence check message"
    }
    r = requests.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 200
    contact_id = r.json()["id"]

    # Verify it appears in GET
    r2 = requests.get(f"{BASE_URL}/api/contacts")
    assert r2.status_code == 200
    ids = [c["id"] for c in r2.json()]
    assert contact_id in ids

def test_post_contact_missing_fields():
    payload = {"nom": "TEST_Incomplete"}
    r = requests.post(f"{BASE_URL}/api/contact", json=payload)
    assert r.status_code == 422  # Validation error
