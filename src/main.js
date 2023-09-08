import { PartyParticle } from "./PartyParticle";
import "./styles/style.scss";

const PARTICLES_COUNT = 100;
const PARTY_DURATION = 5000;

const btn = document.querySelector(".party-trigger");
const particlesContainer = document.querySelector(".party-particles-container");

btn.addEventListener("click", partyHandler);

function partyHandler(e) {
  const partyState = btn.dataset.partyState;

  for (let i = 0; i < PARTICLES_COUNT; i++) {
    createParticle();
  }

  btn.dataset.partyState = "active";
}

function createParticle() {
  const particle = new PartyParticle(PARTY_DURATION);
  const particleElem = particle.createElement();

  particlesContainer.append(particleElem);
}
