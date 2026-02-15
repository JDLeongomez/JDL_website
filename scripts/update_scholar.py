from scholarly import scholarly
import json
import time

USER_ID = "8Q0jKHsAAAAJ"

def main():
    try:
        author = scholarly.search_author_id(USER_ID)
        time.sleep(2)  # pequeño delay
        author = scholarly.fill(author, sections=["indices"])

        PROFILE_URL = f"https://scholar.google.com/citations?user={USER_ID}"
        
        data = {
            "profile_url": PROFILE_URL,
            "total_citations": author.get("citedby", 0),
            "h_index": author.get("hindex", 0),
            "i10_index": author.get("i10index", 0),
        }

        with open("data/scholar.json", "w") as f:
            json.dump(data, f, indent=2)

        print("Scholar stats updated successfully.")

    except Exception as e:
        print("Error updating Scholar stats:")
        print(e)

if __name__ == "__main__":
    main()
