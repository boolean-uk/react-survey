function PlaySound() {
  var audio = new Audio('src/assets/quack.wav')
  audio.currentTime=0.01
  audio.play();
}

export default function Header() {
  return (
    <header className="header">
      <img width="75" src="assets/rubber-duck.webp" alt="rubber duck" title="Click me!" onClick={() => PlaySound()} />

      <h1>Yet Another Survey!</h1>
    </header>
  );
}