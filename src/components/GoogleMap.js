import React from 'react';
//import {GoogleApiWrapper} from 'google-maps-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const GoogleMap = () => {
  return (
    <>
      <Map 
            google={this.props.google} 
            zoom={14} 
            style={{width: '100vw', height: '100vh'}}
            initial ={{
                lat : 43.6532 ,
                lng :79.3832
            }}
      
      >
 
 {/* <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     {/* <div>
       <h1>{this.state.selectedPlace.name}</h1>
     </div> */}

</Map>
    </>
  );
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyAVFw2aksmOb7kEsOkb1JFsoGlPXJE_B0Y")
  })(GoogleMap);
