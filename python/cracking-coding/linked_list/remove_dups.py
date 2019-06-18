def remove_dups(head):
    cache = {}

    current = head
    prev = {}
    while current:
        found_dup = False
        curr_val = current["value"]
        if curr_val in cache:
            prev["next"] = current["next"]
            found_dup = True
        else:
            cache[curr_val] = True

        if not found_dup:
            prev = current
        current = current["next"]


def remove_dups2(head):
    current = head

    while current:
        scout = current
        while scout["next"]:
            if scout["next"]["value"] == current["value"]:
                scout["next"] = scout["next"]["next"]
            else:
                scout = scout["next"]
        current = current["next"]


l1 = {"value": 1, next: None}
l2 = {"value": 2, next: None}
l3 = {"value": 3, next: None}
l4 = {"value": 4, next: None}
l5 = {"value": 3, next: None}
l6 = {"value": 3, next: None}
l7 = {"value": 7, next: None}

l1["next"] = l2
l2["next"] = l3
l3["next"] = l4
l4["next"] = l5
l5["next"] = l6
l6["next"] = l7
l7["next"] = None

remove_dups2(l1)
print("---")
current = l1
while current:
    print(current["value"])
    current = current["next"]

