class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return f"{self.name} makes a generic animal sound."

    def eat(self, food):
        return f"{self.name} is eating {food}."

    def __str__(self):
        return f"Animal(name={self.name}, age={self.age}, species={self.species})"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):
        return f"{self.name} says Woof!"

    def fetch(self, item):
        return f"{self.name} fetches the {item}."

    def __str__(self):
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name, age, is_indoor):
        super().__init__(name, age, "Cat")
        self.is_indoor = is_indoor

    def speak(self):
        return f"{self.name} says Meow!"

    def purr(self):
        return f"{self.name} is purring happily."

    def __str__(self):
        return f"Cat(name={self.name}, age={self.age}, is_indoor={self.is_indoor})"
