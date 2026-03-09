from models import Animal, Dog, Cat

def main():
    # Instantiate objects
    generic_animal = Animal("Generic", 5, "Unknown")
    buddy_dog = Dog("Buddy", 3, "Golden Retriever")
    whiskers_cat = Cat("Whiskers", 2, True)

    # Store objects in a list
    animals = [generic_animal, buddy_dog, whiskers_cat]

    print("--- Iterating through the list of animals ---")
    # Iterate over them and call methods to demonstrate polymorphism
    for animal in animals:
        # Calls the __str__ method of the respective class
        print(animal)

        # Calls the overriden speak() method - Polymorphism in action
        print(animal.speak())

        # Call base class method
        print(animal.eat("some food"))

        print("-" * 20)

    # Demonstrate unique methods
    print("\n--- Demonstrating unique methods ---")
    print(buddy_dog.fetch("ball"))
    print(whiskers_cat.purr())


if __name__ == "__main__":
    main()