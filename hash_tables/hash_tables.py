

# insert
# delete
# search avg O(1), worst O(n)


d = {
    'a': 1,
    'b': 9,
    'c': "ddd",
    'd': True,
}


# insert
d['e'] = False

# delete
del d['a']

# search
print(d['c'])
