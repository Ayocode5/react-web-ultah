import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "90%",
  height: "400px",
  margin: "0 auto",
};

const defaultProps = {
  center: {
    lat: -6.247919053750098,
    lng: 106.7463764125819,
  },
  zoom: 11,
};
export class MapContainer extends Component {
  render() {
    return (
      <>
        {/* <Map
          google={this.props.google}
          zoom={18}
          style={mapStyles}
          initialCenter={{
            lat: -6.247919053750098,
            lng: 106.7463764125819,
          }}
        /> */}

        <GoogleMapReact
          style={mapStyles}
          bootstrapURLKeys={{ key: "AIzaSyDs8RNEcTcj3DgX50hoFkRVGUV3stHfFe8" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </>
    );
  }
}

// MapContainer = GoogleApiWrapper({
//   apiKey: "AIzaSyDs8RNEcTcj3DgX50hoFkRVGUV3stHfFe8",
// })(MapContainer);
