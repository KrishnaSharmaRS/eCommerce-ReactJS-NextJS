import Image from "next/image";
import LinkCustom from "../LinkCustom";

interface IProps {
  link: string;
  imageUrl: string;
  title: string;
  price: number;
}

const ProductCard = ({ link, imageUrl, title, price }: IProps) => (
  <article className="usZlM">
    <figure className="_12_z9">
      <LinkCustom className="_2PlVr" to={link}>
        <div
          className="_12cr2 mvfiF _1ZoHX wBHJF"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="iUm2H" />
          <Image className="_3YlSt" src={imageUrl} alt={title} height={"auto"} width={"auto"} />
        </div>
      </LinkCustom>
      <div className="_1MW85">
        <LinkCustom className="O1HZb" to={link}>
          <div
            className="_12cr2 _1TbEK _31IMi wBHJF"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <div className="iUm2H" />
            <Image className="_3YlSt" src={imageUrl} draggable="true" alt={title} height={"auto"} width={"auto"} />
          </div>
        </LinkCustom>
      </div>
      <div className="_1oLSJ nb-9N" />
    </figure>
    <p className="_3NokE">
      <LinkCustom className="_1ZjvK _1fbHq" to={link}>
        {title}
      </LinkCustom>
    </p>
    <span className="_1aQ7p _3yw-p">${price}</span>
  </article>
);

export default ProductCard;
