import React, { useState } from "react";
import styles from "./styles.module.scss";
import AlertDialogSlide from "@UI/Dialog";

const orders = [
  {
    name: "James Ruskin",
    image: "/img/ellipse-38.png",
    date: "Jan 11, 2023 at 01:49 pm",
    address: "13260 Ponderosa dri... 90049",
    price: "$49.99",
    status: "completed",
  },
  {
    name: "Guy Hawkins",
    image: "/img/ellipse-38-4.png",
    date: "Jan 11, 2023 at 01:49 pm",
    address: "13260 Ponderosa dri... 90049",
    price: "$49.99",
    status: "completed",
  },
  {
    name: "Marvin McKinney",
    image: "/img/ellipse-38-3.png",
    date: "Jan 11, 2023 at 01:49 pm",
    address: "13260 Ponderosa dri... 90049",
    price: "$49.99",
    status: "completed",
  },
  {
    name: "Darlene Robertson",
    image: "/img/ellipse-38-2.png",
    date: "Jan 11, 2023 at 01:49 pm",
    address: "13260 Ponderosa dri... 90049",
    price: "$49.99",
    status: "completed",
  },
  {
    name: "Ronald Richards",
    image: "/img/ellipse-38-1.png",
    date: "Jan 11, 2023 at 01:49 pm",
    address: "13260 Ponderosa dri... 90049",
    price: "$49.99",
    status: "completed",
  },
  {
    name: "Ronald Richards",
    image: "/img/ellipse-38-1.png",
    date: "Jan 11, 2023 at 01:49 pm",
    address: "13260 Ponderosa dri... 90049",
    price: "$49.99",
    status: "upcoming",
  },
];

const order = {
  name: "James Ruskin",
  address: "1st Avenue, New York, USA - 385535",
  date: "May 16, 2023",
  image: "/img/ellipse-39.svg",
  time: "6:30 pm",
  status: "completed",
  orderItems: [
    {
      vehicle: "Honda Civic Sedan Black ABC-1234",
      services: [
        { name: "Full detail", price: "$73" },
        { name: "Shampoo and Upholstery", price: "$73" },
      ],
    },
    {
      vehicle: "Honda Civic Sedan Black ABC-1234",
      services: [
        { name: "Full detail", price: "$73" },
        { name: "Shampoo and Upholstery", price: "$73" },
      ],
    },
  ],
  pricing: {
    subTotal: "$73",
    discountCode: "10",
    total: "$119",
  },
};

const menuOptions = ["Upcoming", "Completed"];

const BookingHistory = () => {
  const [open, setOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(1);
  const [activeOrder, setActiveOrder] = useState(order);
  // const [activeOrder, setActiveOrder] = useState(null);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperContainer}>
            <h1 className={styles.bookingHeading}>Booking</h1>
            <div className={styles.menu}>
              {menuOptions.map((option, i) => (
                <div
                  className={
                    i === activeOption ? styles.activeOption : styles.menuOption
                  }
                  onClick={() => setActiveOption(i)}
                  key={i}
                >
                  <div className={styles.text}>{option}</div>
                </div>
              ))}
            </div>
            <div className={styles.ordersContainer}>
              {orders
                .filter(
                  (order) =>
                    order.status ===
                    menuOptions[activeOption].toLocaleLowerCase()
                )
                .map((order, i) => (
                  <div
                    className={styles.orderWrapper}
                    onClick={() => setOpen(true)}
                    key={i}
                  >
                    <div className={styles.left}>
                      <img
                        className={styles.detailerImg}
                        alt="Ellipse"
                        src="/img/ellipse-38.png"
                      />
                      <div className={styles.column}>
                        <div className={styles.textWrapper}>
                          <div className={styles.text}>{order.name}</div>
                        </div>
                        <img
                          className={styles.ratingsImg}
                          alt="Frame"
                          src="/img/frame-4491-1.svg"
                        />
                      </div>
                    </div>
                    <p className={styles.timeText}>{order.date}</p>
                    <div className={styles.addressText}>{order.address}</div>
                    <div className={styles.priceText}>{order.price}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <AlertDialogSlide open={open} setOpen={setOpen}>
        <div className={styles.dialog}>
          <div className={styles.container}>
            <div className={styles.top}>
              <div className={styles.left}>
                <img
                  className={styles.detailerImg}
                  alt="Ellipse"
                  src={order.image}
                />
                <div className={styles.nameContainer}>
                  <div className={styles.textWrapper}>
                    <div className={styles.text}>{order.name}</div>
                  </div>
                </div>
              </div>
              <img
                className={styles.right}
                alt="Ic baseline phone"
                src="/img/ic-baseline-phone.svg"
              />
            </div>
            <div className={styles.mid1}>
              <div className={styles.scheduleHeading}>Schedule details</div>
              <div className={styles.addressTimeContainer}>
                <p className={styles.addressText}>{order.address}</p>
                <div className={styles.timeContainer}>
                  <div className={styles.text}>{order.date}</div>
                  <img
                    className={styles.clockImg}
                    alt="Img"
                    src="/img/image.svg"
                  />
                  <div className={styles.text}>{order.time}</div>
                </div>
              </div>
            </div>
            <div className={styles.mid2}>
              <div className={styles.orderHeading}>Order details</div>
              <div className={styles.ordersContainer}>
                {order.orderItems.map((orderItem, i) => (
                  <div className={styles.orderContainer} key={i}>
                    <p className={styles.p}>{orderItem.vehicle}</p>
                    <div className={styles.orderDetailContainer}>
                      {orderItem.services.map((service, i) => (
                        <div className={styles.orderItem} key={i}>
                          <div className={styles.text}>{service.name}</div>
                          <div className={styles.priceText}>
                            {service.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.totalContainer}>
                <div className={styles.text}>Sub total</div>
                <div className={styles.priceText}>{order.pricing.subTotal}</div>
              </div>
              <hr className={styles.line} />
              <div className={styles.discountContainer}>
                <div className={styles.discountWrapper}>
                  <div className={styles.text}>
                    SAVE {order.pricing?.discountCode}
                  </div>
                </div>
              </div>
              <hr className={styles.line} />
              <div className={styles.totalContainer}>
                <div className={styles.text}>Total</div>
                <div className={styles.priceText}>{order.pricing.total}</div>
              </div>
            </div>
          </div>
        </div>
      </AlertDialogSlide>
    </>
  );
};

export default BookingHistory;
