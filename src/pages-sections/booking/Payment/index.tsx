import React from "react";
import styles from "./styles.module.scss";
import Button from "@UI/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AppleIcon from "@mui/icons-material/Apple";
import Input from "@UI/Input";
// import Component from "./Component-payment";

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Payment: React.FC<IProps> = ({ setStep }) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.backBtnContainer}>
            <Button
              variant="icon"
              className={styles.backBtn}
              startIcon={<KeyboardArrowLeftIcon />}
              onClick={() => setStep((prev) => prev - 1)}
            >
              Back
            </Button>
          </div>
          <div className={styles.orderDetailsContainer}>
            <div className={styles.userDetails}>
              <img
                className={styles.userImg}
                alt="Ellipse"
                src="/img/ellipse-39.svg"
              />
              <div className={styles.userNameContainer}>
                <div className={styles.userNameWrapper}>
                  <div className={styles.text}>Ralph Edward</div>
                </div>
              </div>
            </div>
            <div className={styles.scheduleDetails}>
              <div className={styles.scheduleDetailsHeading}>
                Schedule details
              </div>
              <div className={styles.address}>
                <p className={styles.p}>1st Avenue, New York, USA - 385535</p>
                <div className={styles.time}>
                  <div className={styles.text}>May 16, 2023</div>
                  {/* <img className="img-2" alt="Img" src="/img/image.svg" /> */}
                  <div className={styles.text}>6:30 pm</div>
                </div>
              </div>
            </div>
            <div className={styles.orderDetails}>
              <div className={styles.orderDetailsHeading}>Order details</div>
              <div className={styles.orderDetailsWrapper}>
                <div className={styles.orderItemContainer}>
                  <p>Honda Civic Sedan Black ABC-1234</p>
                  <div className={styles.itemsContainer}>
                    <div className={styles.item}>
                      <div className={styles.text}>Full detail</div>
                      <div className={styles.textPrice}>$73</div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.text}>Shampoo and Upholstery</div>
                      <div className={styles.textPrice}>$73</div>
                    </div>
                  </div>
                </div>
                {/* <div className="frame-9">
                  <p className="text-wrapper-6">
                    Honda Civic Sedan Black ABC-1234
                  </p>
                  <div className="frame-10">
                    <div className="frame-11">
                      <div className="text-wrapper-7">Full detail</div>
                      <div className="text-wrapper-8">$73</div>
                    </div>
                    <div className="frame-11">
                      <div className="text-wrapper-7">
                        Shampoo and Upholstery
                      </div>
                      <div className="text-wrapper-8">$73</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className={styles.totalPriceContainer}>
              <div className={styles.total}>
                <div className={styles.text}>Sub total</div>
                <div className={styles.textPrice}>$73</div>
              </div>
              {/* <img className="line" alt="Line" src="/img/line-12.svg" /> */}
              {/* <Component className="component-3" property1="frame-5446" /> */}
              <div className={styles.total}>
                <div className={styles.text}>Total</div>
                <div className={styles.textPrice}>$119</div>
              </div>
              {/* <img className="line" alt="Line" src="/img/line-12.svg" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <div className={styles.right}>
          <div className={styles.paymentOptionsContainer}>
            <div className={styles.applePayContainer}>
              <AppleIcon className={styles.appleIcon} />
              <div className={styles.text}>Pay</div>
            </div>
            <div className={styles.cardPayContainer}>
              <hr className={styles.line} />
              <div className={styles.text}>or pay with card</div>
              <hr className={styles.line} />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.column}>
              <div className={styles.text}>Email</div>
              <div className={styles.inputWrapper}>
                <Input
                  type="textField"
                  size="lg"
                  className={styles.textInput}
                />
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.text}>Card information</div>
              <div className={styles.column} style={{ gap: 0 }}>
                <div className={styles.inputWrapper}>
                  <Input
                    type="textField"
                    size="lg"
                    className={styles.textInput}
                    placeholder="1234 1234 1234 1234"
                    style={{ borderRadius: "16px 16px 0px 0px" }}
                  />
                  <img
                    className={styles.paymentCardOptionsImg}
                    alt="Frame"
                    src="/img/frame-4613.svg"
                  />
                </div>
                <div className={styles.row}>
                  <Input
                    type="textField"
                    size="lg"
                    className={styles.textInput}
                    placeholder="CVC"
                    style={{ borderRadius: "0px 0px 0px 16px", borderTop: 0 }}
                  />
                  <Input
                    type="textField"
                    size="lg"
                    className={styles.textInput}
                    placeholder="CVC"
                    style={{
                      borderRadius: "0px 0px 16px 0px",
                      borderTop: 0,
                      marginLeft: "-3px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.text}>Name on card</div>
              <div className={styles.inputWrapper}>
                <Input
                  type="textField"
                  size="lg"
                  className={styles.textInput}
                />
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.text}>Country or region</div>
              <div className={styles.column} style={{ gap: 0 }}>
                <div className={styles.inputWrapper}>
                  <Input
                    type="dropDownSelector"
                    className={styles.selectInput}
                    options={[
                      { value: "us", label: "United States" },
                      { value: "cd", label: "Canada" },
                    ]}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <Input
                    type="textField"
                    size="lg"
                    className={styles.textInput}
                    placeholder="ZIP"
                    style={{ borderRadius: "0 0 16px 16px", borderTop: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <Button
              className={styles.payBtn}
              onClick={() => setStep((prev) => prev + 1)}
            >
              Pay $73
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
