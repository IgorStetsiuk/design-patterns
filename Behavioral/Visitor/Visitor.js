/**
 *  Use an interfaces keywords here to give a full context how this pattern works in real
 *
 *  Have to write it in executive example and use JS6 features.
 */

// Let's take an example of a zoo simulation where we have several different kinds of animals and we have to make them Sound.
// Let's translate this using visitor pattern

// Visitee
interface Animal
{
  public function accept(AnimalOperation $operation);
}

// Visitor
interface AnimalOperation
{
  public function visitMonkey(Monkey $monkey);
  public function visitLion(Lion $lion);
  public function visitDolphin(Dolphin $dolphin);
}
Then we have our implementations for the animals

class Monkey implements Animal
{
  public function shout()
{
  echo 'Ooh oo aa aa!';
}
  
  public function accept(AnimalOperation $operation)
{
  $operation->visitMonkey($this);
}
}

class Lion implements Animal
{
  public function roar()
{
  echo 'Roaaar!';
}
  
  public function accept(AnimalOperation $operation)
{
  $operation->visitLion($this);
}
}

class Dolphin implements Animal
{
  public function speak()
{
  echo 'Tuut tuttu tuutt!';
}
  
  public function accept(AnimalOperation $operation)
{
  $operation->visitDolphin($this);
}
}
Let's implement our visitor

class Speak implements AnimalOperation
{
  public function visitMonkey(Monkey $monkey)
{
  $monkey->shout();
}

public function visitLion(Lion $lion)
{
  $lion->roar();
}

public function visitDolphin(Dolphin $dolphin)
{
  $dolphin->speak();
}
}
And then it can be used as

$monkey = new Monkey();
$lion = new Lion();
$dolphin = new Dolphin();

$speak = new Speak();

$monkey->accept($speak);    // Ooh oo aa aa!
$lion->accept($speak);      // Roaaar!
$dolphin->accept($speak);   // Tuut tutt tuutt!
We could have done this simply by having an inheritance hierarchy for the animals but then we would have to modify the animals whenever we would have to add new actions to animals. But now we will not have to change them. For example, let's say we are asked to add the jump behavior to the animals, we can simply add that by creating a new visitor i.e.

class Jump implements AnimalOperation
{
  public function visitMonkey(Monkey $monkey)
{
  echo 'Jumped 20 feet high! on to the tree!';
}

public function visitLion(Lion $lion)
{
  echo 'Jumped 7 feet! Back on the ground!';
}

public function visitDolphin(Dolphin $dolphin)
{
  echo 'Walked on water a little and disappeared';
}
}
And for the usage

$jump = new Jump();

$monkey->accept($speak);   // Ooh oo aa aa!
$monkey->accept($jump);    // Jumped 20 feet high! on to the tree!

$lion->accept($speak);     // Roaaar!
$lion->accept($jump);      // Jumped 7 feet! Back on the ground!

$dolphin->accept($speak);  // Tuut tutt tuutt!
$dolphin->accept($jump);   // Walked on water a little and disappeared

//TODO: Give another example