'''
we can filter an array by removing positive values; 
or we could filter it by removing all odd values. 
These are two filtering strategies we could implement, but we could add many more
'''


from abc import ABC, abstractmethod


class FilterStrategy(ABC):
    @abstractmethod
    def removeValue(self, val):
        pass


class RemoveNegativeStrategy(FilterStrategy):
    def removeValue(self, val):
        return val < 0


class RemoveOddStrategy(FilterStrategy):
    def removeValue(self, val):
        return abs(val) % 2


class Values:
    def __init__(self, vals):
        self.vals = vals

    def filter(self, strategy):
        res = []
        for n in self.vals:
            if not strategy.removeValue(n):
                res.append(n)
        return res


values = Values([-7, -4, -1, 0, 2, 6, 9])

print(values.filter(RemoveNegativeStrategy()))
print(values.filter(RemoveOddStrategy()))


# A common alternative to this pattern is to simply pass in an inline / lambda function,
# which allows us to extend the behavior of a method or class.
