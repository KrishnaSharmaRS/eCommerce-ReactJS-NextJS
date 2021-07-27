import React from "react";

const OrdersSection = () => {
  return (
    <section className="_2N-1d">
      <div>
        {[].map(({ id }: { id: string }, idx: number) => (
          <div key={idx} className="border p-2">
            <div className="FN5ZV row">
              <span className="col-11">
                Date: {"orderDate"}, ({status})
              </span>
              <span className="col-1 pointer">
                <i className="fas fa-info" />
              </span>
            </div>
            <p className="FN5ZV">
              City: {"city"}, State: {"state"}, {"zipCode"}
            </p>
            <p className="FN5ZV">TOTAL: ${"amount"}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrdersSection;
