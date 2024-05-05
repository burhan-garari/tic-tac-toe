import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, within } from '@testing-library/react';
import App from './App';
import GameControls from './components/GameControls/controls';
import PlayerBanner from './components/PlayerBanner/player-banner';

it("app renders without crashing smoke test", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
})

test('renders game title', () => {
  render(<App />)
  const gameTitle = screen.getByRole("gameTitle");
  expect(gameTitle).toBeInTheDocument();
});

test('renders game controls section', async () => {
  render(<App />);
  const gameControlsContainer = screen.getByRole("controls-container");
  expect(gameControlsContainer).toBeInTheDocument();

  const controlsTitle = screen.getByRole("controls-title");
  expect(controlsTitle).toBeInTheDocument();

  const controlsMenu = screen.getByRole("controls-menu");
  expect(controlsMenu).toBeInTheDocument();

  const resetBtn = screen.getByRole("resetButton");
  expect(resetBtn).toBeInTheDocument();

  const timeTravelButton = screen.getByRole("timeTravelButton");
  expect(timeTravelButton).toBeInTheDocument();

  const resetBtnText = await within(resetBtn).findByText("RESET");
  expect(resetBtnText).toBeInTheDocument();

  const timeTravelBtnText = await within(timeTravelButton).findByText("Show Time travel");
  expect(timeTravelBtnText).toBeInTheDocument();
});

test('render game controls when time travel enabled', async () => {
  render(<GameControls handleResetBoard={() => {}} updateTimeTravel={()=>{}} isTimeTravel={true}/>)
  const timeTravelBtn = screen.getByRole("timeTravelButton");
  const hideTimeTravelText = await within(timeTravelBtn).getByText("Hide Time travel");
  expect(hideTimeTravelText).toBeInTheDocument();
})

test('player banner text when Player with move X is playing', async () => {
  render(<PlayerBanner isGameOver={[false, ""]} playerMove={"X"}/>)
  const playerBanner = screen.getByRole("player-banner-text");
  expect(playerBanner).toBeInTheDocument();

  const bannerText = await within(playerBanner).getByText("Player's turn - X");
  expect(bannerText).toBeInTheDocument();
})

test('player banner text when player with move O is playing', async () => {
  render(<PlayerBanner isGameOver={[false, ""]} playerMove={"O"}/>);
  const playerBanner = screen.getByRole("player-banner-text");
  expect(playerBanner).toBeInTheDocument();

  const bannerText = await within(playerBanner).getByText("Player's turn - O");
  expect(bannerText).toBeInTheDocument();
})

test('player banner winner text', async () => {
  render (<PlayerBanner isGameOver={[true, "X"]} playerMove={""} />);
  const playerBanner = screen.getByRole("player-banner-text");
  expect(playerBanner).toBeInTheDocument();

  const bannerText = await within(playerBanner).getByText("Player X has won");
  expect(bannerText).toBeInTheDocument();
})