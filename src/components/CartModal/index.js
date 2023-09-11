"use client";

import { Fragment, useContext } from "react";
import CommonModal from "../CommomModal";
import { GlobalContext } from "@/context";

export default function CartModal() {
  const { showCartModal, setShowCartModal } = useContext(GlobalContext);
  return (
    <CommonModal
      showButtons={true}
      show={showCartModal}
      setShow={setShowCartModal}
      buttonComponent={
        <Fragment>
          <button>GO TO CART</button>
          <button>CheckOUT</button>
        </Fragment>
      }
    />
  );
}
