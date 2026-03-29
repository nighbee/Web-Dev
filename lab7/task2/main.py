from models import Animal, Dog, Cat

def main():

    generic_animal = Animal("Generic", 5, "Unknown")
    buddy_dog = Dog("Buddy", 3, "Golden Retriever")
    whiskers_cat = Cat("Whiskers", 2, True)
    animals = [generic_animal, buddy_dog, whiskers_cat]
    print("Iterating through the list of animals ")
    for animal in animals:
        print(animal)
        print(animal.speak())
        print(animal.eat("some food"))

        print("-" * 20)

    print(" Demonstrating unique methods")
    print(buddy_dog.fetch("ball"))
    print(whiskers_cat.purr())


if __name__ == "__main__":
    main()