import React, {useState, useEffect} from "react";
import "./index.scss";
import {Map, Marker, NavigationControl, InfoWindow, Circle} from 'react-bmapgl';

const BorderSpin = props => {
  const infoWindowRef = React.createRef();
  const markerRef = React.createRef();
  const point = {
    lng: 108.387994,
    lat: 22.752878
  }
  const marker = {
    position: point,
    icon: "blue1",
    autoViewport: true,
  };
  const mapConfig = {
    center: point,
    zoom: "17",
    className: "border-spin",
    enableScrollWheelZoom: true,
  }
  return <div className="border-spin">
    <Map
      {...mapConfig}
    >
      <Marker
        {...marker}
        ref={markerRef}
        onClick={(e) => {
          markerRef.current.props.map.openInfoWindow(infoWindowRef.current.infoWindow, point)
        }}
      />
      {/*试图旋转*/}
      <NavigationControl/>
      <InfoWindow
        ref={infoWindowRef}
        position={point}
        text="内容：AAAA"
        title="标题：BBBBB"
      />
      {/*圆圈*/}
      {/*<Circle*/}
      {/*center={point}*/}
      {/*radius={100}*/}
      {/*fillColor="pink"*/}
      {/*fillOpacity={.1}*/}
      {/*strokeColor={"#22b75a"}*/}
      {/*strokeOpacity={.2}*/}
      {/*strokeWeight={5}*/}
      {/*/>*/}
    </Map>
  </div>

};

export default BorderSpin;