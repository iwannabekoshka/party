export class PartyParticle {
  constructor(partyDuration) {
    this.partyDuration = partyDuration;

    this.width = this.#getRandomSize(this.#WIDTH_MIN, this.#WIDTH_MAX);
    this.height = this.#getRandomSize(this.#HEIGHT_MIN, this.#HEIGHT_MAX);

    this.color = this.#getRandomColor();
    this.shape = this.#getRandomShape();

    this.endX =
      this.#getRandomIntNumber(-this.#PARTY_WIDTH, this.#PARTY_WIDTH) + "vw";
    this.topY =
      -1 *
        this.#getRandomIntNumber(
          this.#PARTY_HEIGHT_MIN,
          this.#PARTY_HEIGHT_MAX
        ) +
      "vh";

    this.bottomY =
      this.#getRandomIntNumber(
        this.#PARTY_HEIGHT_END_MIN,
        this.#PARTY_HEIGHT_END_MAX
      ) + "vh";

    this.offsetZ =
      this.#getRandomIntNumber(this.#Z_VALUE, this.#Z_VALUE) + "px";

    this.rotate = this.#getRandomIntNumber(-this.#ROTATE, this.#ROTATE) + "deg";
  }

  partyDuration;

  width;
  height;
  color;
  shape;
  endX;
  topY;
  bottomY;
  offsetZ;
  rotate;

  #WIDTH_MIN = 4;
  #WIDTH_MAX = 16;

  #HEIGHT_MIN = 4;
  #HEIGHT_MAX = 16;

  #Z_VALUE = 1000;
  #ROTATE = 3600;

  #SHAPES = ["rect", "pill", "round"];

  #PARTY_HEIGHT_MIN = 30;
  #PARTY_HEIGHT_MAX = 40;
  #PARTY_HEIGHT_END_MIN = 10;
  #PARTY_HEIGHT_END_MAX = 20;
  #PARTY_WIDTH = 30;

  createElement() {
    const particle = document.createElement("span");

    particle.classList.add("party-particle");
    particle.style.width = this.width;
    particle.style.height = this.height;
    particle.style.backgroundColor = this.color;
    this.#applyShapeStyles(particle, this.shape);

    const particleContainer = document.createElement("div");
    particleContainer.classList.add("party-particle-container");
    particleContainer.style.setProperty("--endX", this.endX);
    particleContainer.style.setProperty("--topY", this.topY);
    particleContainer.style.setProperty("--bottomY", this.bottomY);
    particleContainer.style.setProperty("--offsetZ", this.offsetZ);
    particleContainer.style.setProperty("--rotate", this.rotate);
    particleContainer.style.setProperty(
      "--partyDuration",
      this.partyDuration + "ms"
    );

    particleContainer.append(particle);

    setTimeout(() => particleContainer.remove(), this.partyDuration - 100);

    return particleContainer;
  }

  #getRandomIntNumber(from, to) {
    return Math.round(Math.random() * (to - from) + from);
  }

  #getRandomSize(from, to) {
    return this.#getRandomIntNumber(from, to) + "px";
  }

  #getRandomColor() {
    const degrees = Math.round(Math.random() * 360);

    return `hsl(${degrees}, 100%, 50%)`;
  }

  #getRandomShape() {
    return this.#SHAPES[this.#getRandomIntNumber(0, this.#SHAPES.length - 1)];
  }

  #applyShapeStyles(elem, shape) {
    if (shape === "rect") {
    } else if (shape === "pill") {
      elem.style.borderRadius = "50%";
    } else if (shape === "round") {
      elem.style.borderRadius = "999px";
    }

    return elem;
  }
}
