import { Counter } from "./patterns/Compound";
import {
  Company,
  ControlInversion,
  Product,
  TCompany,
  TProduct,
  listCompanies,
  listProducts,
} from "./patterns/ControlInversion";
import { Modal, Table } from "./patterns";

type Cabin = {
  id: string;
  imageUrl: string;
  name: string;
  capacity: string;
  price: number;
  discount: number;
};

export default () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "fit-content",
          marginBottom: "12px",
          padding: "4px",
          borderBottom: "1px",
          borderBottomColor: "gray",
          borderBottomStyle: "solid",
        }}
      >
        <Counter>
          <Counter.Increase icon="➕" />
          <span
            style={{
              display: "inline-flex",
              margin: "0 4px",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Counter.Label>My Counter</Counter.Label>
            <Counter.Count />
          </span>
          <Counter.Decrease icon="➖" />
        </Counter>
      </div>
      <div
        style={{
          display: "flex",
          width: "fit-content",
          padding: "4px",
          marginBottom: "12px",
          borderBottom: "1px",
          borderBottomColor: "gray",
          borderBottomStyle: "solid",
        }}
      >
        <Counter>
          <Counter.Decrease icon="➖" />
          <span
            style={{
              display: "inline-flex",
              margin: "0 4px",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Counter.Label>My Counter</Counter.Label>
            <Counter.Count />
          </span>
          <Counter.Increase icon="➕" />
        </Counter>
      </div>
      <div style={{ display: "flex", width: "fit-content" }}>
        <Counter>
          <span
            style={{
              display: "inline-flex",
              margin: "0 4px",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Counter.Label>My Counter</Counter.Label>
            <Counter.Count />
          </span>
          <Counter.Decrease icon="➖" />
          <Counter.Increase icon="➕" />
        </Counter>
      </div>

      <ControlInversion
        items={listProducts}
        render={(product: TProduct) => (
          <Product key={product.id} {...product} />
        )}
      />
      <ControlInversion
        items={listCompanies}
        render={(company: TCompany) => (
          <Company key={company.id} {...company} />
        )}
      />

      <Modal>
        <Modal.Open opens="my-content">
          <button>Abra Cadabra</button>
        </Modal.Open>
        <Modal.Window name="my-content">
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "blue",
            }}
          >
            <h3 style={{ margin: 0 }}>Title</h3>
            <Modal.Close>
              <button
                onClick={() => {
                  console.log("Weeee I closed!!!");
                }}
              >
                ❌
              </button>
            </Modal.Close>
          </section>
          <section style={{ flex: 1, backgroundColor: "salmon" }}>
            Content
          </section>
          <section style={{ backgroundColor: "red" }}>Footer</section>
        </Modal.Window>
      </Modal>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div role="columnheader">Cabin</div>
          <div role="columnheader">Capacity</div>
          <div role="columnheader">Price</div>
          <div role="columnheader">Discount</div>
        </Table.Header>
        <Table.Body<Cabin>
          data={[
            {
              id: "C1",
              imageUrl:
                "https://afar.brightspotcdn.com/dims4/default/1f21793/2147483647/strip/false/crop/1533x1022+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fe0%2Fe8%2Fe092eacecffbfa5d6b501a4c637a%2Foriginal-airbnb-cabin-a-frame-dunlap-hollow.jpeg",
              name: "Sweet Cabin",
              capacity: "3",
              price: 12.99,
              discount: 0.1,
            },
            {
              id: "C2",
              imageUrl:
                "https://afar.brightspotcdn.com/dims4/default/1f21793/2147483647/strip/false/crop/1533x1022+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fe0%2Fe8%2Fe092eacecffbfa5d6b501a4c637a%2Foriginal-airbnb-cabin-a-frame-dunlap-hollow.jpeg",
              name: "Huge Cabin",
              capacity: "12",
              price: 15.99,
              discount: 0.1,
            },
          ]}
          render={({ id, imageUrl, name, capacity, price, discount }) => (
            <Table.Row key={id}>
              <span role="cell">
                <p>{name}</p>
                <img
                  style={{
                    display: "block",
                    width: "6.4rem",
                    aspectRatio: "3 / 2",
                    objectFit: "cover",
                    objectPosition: "center",
                    transform: "scale(1.5) translateX(-7px)",
                  }}
                  src={imageUrl}
                  alt={name}
                />
              </span>
              <span role="cell">
                <p>{capacity}</p>
              </span>
              <span role="cell">
                <p>{price}</p>
              </span>
              <span role="cell">
                <p>{discount}</p>
              </span>
              <span role="cell">
                <div>
                  <button>duplicate</button>
                  <button>edit</button>
                  <button>delete</button>
                </div>
              </span>
            </Table.Row>
          )}
        />
      </Table>
    </>
  );
};
