import pytest
from app import create_app
import fakeredis

@pytest.fixture
def app():
    app = create_app({
        "TESTING": True,
        "SESSION_REDIS": fakeredis.FakeStrictRedis(),
    })
    yield app

@pytest.fixture
def client(app):
    return app.test_client()

def test_home_page_loads(client):
    """Test that the home page loads successfully."""
    response = client.get("/")
    assert response.status_code == 200
    assert b"welcome!" in response.data

def test_visit_counter_increments(client):
    """Test that the visit counter increments on each visit."""
    # First visit
    response = client.get("/")
    assert response.status_code == 200
    assert b"visit number: <strong>1</strong>" in response.data

    # Second visit
    response = client.get("/")
    assert response.status_code == 200
    assert b"visit number: <strong>2</strong>" in response.data

    # Third visit
    response = client.get("/")
    assert response.status_code == 200
    assert b"visit number: <strong>3</strong>" in response.data
