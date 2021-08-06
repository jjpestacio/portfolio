#!/usr/bin/env python3
import os
from pathlib import Path

from dotenv import load_dotenv
from requests import Session

load_dotenv()

DIRECTUS_API = os.environ["DIRECTUS_URL"]
DIRECTUS_API_KEY = os.environ["DIRECTUS_API_KEY"]

CURRENT_DIR = Path(__file__).parent
ROOT_DIR = CURRENT_DIR.parent
IMAGE_DIR = ROOT_DIR / "src/images"

s = Session()
s.headers.update({"Authorization": f"Bearer {DIRECTUS_API_KEY}"})


def get_files() -> list[dict]:
    r = s.get(f"{DIRECTUS_API}/files")
    r.raise_for_status()
    return r.json()["data"]


def get_image(image_id: str) -> bytes:
    r = s.get(f"{DIRECTUS_API}/assets/{image_id}")
    r.raise_for_status()
    return r.content


files = get_files()
images = [f for f in files if f["type"].startswith("image")]

for image in images:
    file_name = image["id"]
    file_type = image["type"].split("/")[-1]
    file_path = IMAGE_DIR / f"{file_name}.{file_type}"

    image_content = get_image(image["id"])

    with open(file_path, "wb") as f:
        f.write(image_content)

    print(f"Downloaded image to {file_path}")
