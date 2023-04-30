# Singleton 意思是特定 class 只會有一個實例，當你第二次透過同個 class 建立實例時，亦只會得到同一個實例。
class ApplicationState:
    instance = None

    def __init__(self):
        self.isLoggedIn = False

    @staticmethod
    def getAppState():
        if not ApplicationState.instance:
            ApplicationState.instance = ApplicationState()
        return ApplicationState.instance


appState1 = ApplicationState.getAppState()
print(appState1.isLoggedIn)  # False

appState2 = ApplicationState.getAppState()
appState1.isLoggedIn = True

print(appState1.isLoggedIn)  # True
print(appState2.isLoggedIn)  # True
