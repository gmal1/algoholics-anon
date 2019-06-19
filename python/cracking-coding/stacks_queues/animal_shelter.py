from enum import Enum

class AnimalSpecies(Enum):
    dog = 1,
    cat = 2

class Animal:
    def __init__(self, species: AnimalSpecies, name: str):
        self.species = species
        self.name = name

class Node:
    def __init__(self, animal: Animal):
        self.animal = animal
        self.next = None

class AnimalShelter:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, animal: Animal):
        node = Node(animal)
        if not self.head:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            self.tail = node

    def dequeueAny(self):
        if not self.head:
            raise Exception('Shelter is empty')

        output = self.head
        self.head = self.head.next

        return output.animal

    
    def __dequeueAnimal(self, species: AnimalSpecies):
        if not self.head:
            raise Exception('Shelter is empty')

        currentAnimal = self.head
        previousAnimal = None

        while currentAnimal.next and not currentAnimal.animal.species == species:
            previousAnimal = currentAnimal
            currentAnimal = previousAnimal.next

        if not currentAnimal.animal.species == species:
            print('dog not found')
            return None

        if currentAnimal == self.head:
            self.head = currentAnimal.next

        if self.head.next == None:
            self.tail = None

        return currentAnimal.animal

    def dequeueDog(self):
        return self.__dequeueAnimal(AnimalSpecies.dog)

    def dequeueCat(self):
        return self.__dequeueAnimal(AnimalSpecies.cat)


# dog1 = Animal(AnimalSpecies.dog, 'Fido')
# dog2 = Animal(AnimalSpecies.dog, 'Bud')
# dog3 = Animal(AnimalSpecies.dog, 'Sam')

# cat1 = Animal(AnimalSpecies.cat, 'Joe')
# cat2 = Animal(AnimalSpecies.cat, 'Mew')

# shelter = AnimalShelter()
# shelter.enqueue(dog1)
# shelter.enqueue(dog2)
# shelter.enqueue(cat1)
# shelter.enqueue(cat2)
# shelter.enqueue(dog3)

# print(shelter.dequeueCat().name)
# print(shelter.dequeueAny().name)
# print(shelter.dequeueDog().name)
# print(shelter.dequeueDog().name)
