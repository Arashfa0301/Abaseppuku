import HitOrder from "./models/hitOrder";

export const generateHitList = (game: string, players: string[]) => {
  players.sort(() => Math.random() - 0.5);

  for (var i = 0; i < players.length; i++) {
    const hitOrder = new HitOrder({
      game: game,
      player: players[i % players.length],
      hunting: players[(i + 1) % players.length],
    });
    hitOrder.save();
  }
};
