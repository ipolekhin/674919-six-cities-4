const leaflet = jest.genMockFromModule(`leaflet`);

leaflet.tileLayer = () => {
  return {addTo: () => {
    return {};
  }};
};

leaflet.marker = () => {
  return {addTo: () => {
    return {};
  }};
};

// leaflet.Icon = {
//   extend: () => {
//     return new LeafIcon();
//   },
// };

// import SoundPlayer from './sound-player';
//
// export default class SoundPlayerConsumer {
//   constructor() {
//     this.soundPlayer = new SoundPlayer();
//   }
//
//   playSomethingCool() {
//     const coolSoundFileName = 'song.mp3';
//     this.soundPlayer.playSoundFile(coolSoundFileName);
//   }
// }

export default leaflet;
