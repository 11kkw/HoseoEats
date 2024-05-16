export {};

declare global {
  namespace naver.maps {
    class Map {
      constructor(element: HTMLElement, options: any);
      setCenter(latlng: LatLng): void;
    }

    class Marker {
      constructor(options: any);
    }

    class LatLng {
      constructor(lat: number, lng: number);
    }

    namespace Service {
      function geocode(
        options: { address: string },
        callback: (status: any, response: any) => void
      ): void;
      const Status: {
        OK: string;
      };
    }
  }
}
