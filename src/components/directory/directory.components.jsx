import React from "react";

import MenuItem from "../menu-item/menu-item.components";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Humanoid Hand",
          imageUrl:
            "https://kudosgan.github.io/La_vie_Canadianne/image/robo/265a71c4f3156a744eea6afeb0b6bd97.jpg",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl:
            "https://kudosgan.github.io/La_vie_Canadianne/image/4-armyscientis.jpg",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl:
            "https://kudosgan.github.io/La_vie_Canadianne/image/robothand.jfif",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens Body ",
          imageUrl:
            "https://kudosgan.github.io/La_vie_Canadianne/image/robo/2381ed2cb66f87fecf3f5a608ddec838.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens body",
          imageUrl:
            "https://kudosgan.github.io/La_vie_Canadianne/image/robo/Z.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
