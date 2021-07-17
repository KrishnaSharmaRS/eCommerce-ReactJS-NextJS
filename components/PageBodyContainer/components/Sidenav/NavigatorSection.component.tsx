import LinkCustom from "../../../LinkCustom";

const ListItemOne = ({ title, link }: { title: string; link: string }) => (
  <li className="tqFlA L9Jp_">
    <LinkCustom className="_3BaAZ" to={link}>
      {title}
    </LinkCustom>
  </li>
);

const ListItemTwo = ({ title, link }: { title: string; link: string }) => (
  <li className="_3gzpR">
    <LinkCustom className="_6R36" to={link}>
      {title}
    </LinkCustom>
  </li>
);

export default function NavigatorSection() {
  return (
    <div className="_2fTxH _38orv">
      <div className="_2fTxH _38orv">
        <div className="_3XPL5">
          <ul className="_2UbEx">
            <ListItemOne title="Shop" link="/products" />
            <ListItemOne title="Sign in" link="/sign-in" />
            <ListItemOne title="Sign up" link="/sign-up" />
            <ListItemOne title="My Account" link="/my-account" />
            <ListItemOne title="My Cart" link="/cart" />
          </ul>
        </div>
        <div className="_1Gs-p">
          <div className="_3v9XS">
            <ul className="_3kY7D">
              <ListItemTwo title="New Arrivals" link="/products" />
              <ListItemTwo title="Bed" link="/products/bed" />
              <ListItemTwo title="Bath" link="/products/bath" />
            </ul>
          </div>
          <div className="_2YPZk">
            <div className="_3bsO1">
              <div className="_1bgil">
                <span>
                  <div />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
