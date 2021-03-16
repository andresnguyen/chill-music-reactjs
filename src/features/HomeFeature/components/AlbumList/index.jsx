import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, List } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import Album from '../Album';
import './AlbumList.scss';

const AlbumList = (props) => {
  const carouselSetting  = useRef();
	const [datalist, setDataList] = useState([]);
  useEffect(() => {
    console.log(props.dataTest);
    var results = [];
    while (props.dataTest.length) {
      results.push(props.dataTest.splice(0, 5));
    }
    setDataList(results)
  },[props.dataTest]);
    return (
<div className="album-list">
    <div className="album-list-header">
      <div className="album-list-title">{props.listTitle}</div>
      <div>
          <LeftOutlined onClick={() => carouselSetting.current.prev()} className="album-list-button"/>
          <RightOutlined onClick={() => carouselSetting.current.next()} className="album-list-button"/>
      </div>
    </div>
            <Carousel dots={false}  className="album-list-carousel" ref={carouselSetting} >
            {datalist.map((value, index) => {
              return <div className="album-list-wrapper" key={index}>
            <List
              grid={{ gutter: 16, column: 5 }}
                dataSource={value}
                renderItem={item => (
                  <List.Item>
                      <Album album = {{img: item.thumbnailM, title: item.name, desc: item.genre + " -- "+item.realeaseDate}} />

                  </List.Item>
                )}
              />
          </div>
      })}
            </Carousel>
</div>
    );
}

export default AlbumList;