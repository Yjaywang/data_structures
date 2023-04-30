# a: 1st rod, from, b: 2nd rod, aux, c: 3rd rod, goal
def hanoi(n, table_a, table_b, table_c):
    # if only 1 disk, directly move to goal
    if n == 1:
        print(f'disk 1 from {table_a} to {table_c}')
    else:
        # if n=4 , move top 3 disks to 2nd rod
        hanoi(n-1, table_a, table_c, table_b)
        # move bottom disk 4 to goal
        print(f'disk {n} from {table_a} to {table_c}')
        # move top 3 disks to goal
        hanoi(n-1, table_b, table_a, table_c)


hanoi(3, 'A', 'B', 'C')


# https://www.youtube.com/watch?v=YstLjLCGmgg
