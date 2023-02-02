import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch("http://localhost:8000/products");

      if (!res.ok) {
        throw new Error("server error :(");
      }

      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  "products/deleteProduct",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const res = await fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("cant delete product man :/");
      }
      dispatch(deleteProduct(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProductAsync = createAsyncThunk(
  "products/addProductAsync",
  async function (item, { rejectWithValue, dispatch }) {
    const res = await fetch("http://localhost:8000/products", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("cant delete product man :/");
    }
  }
);

export const editOneProductAsync = createAsyncThunk(
  "products/editOneProductAsync",
  async function (id, { rejectWithValue, dispatch }) {
    const res = await fetch(`http://localhost:8000/products/${id}`);
    const data = await res.json();
    return data;
  }
);

export const editProductAsync = createAsyncThunk(
  "products/editProduct",
  async function (item, { rejectWithValue, dispatch }) {
    try {
      const res = await fetch(`http://localhost:8000/products/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (!res.ok) {
        throw new Error("cant edit product man :/");
      }
      // dispatch(deleteProduct(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.state = "rejected";
  state.error = action.payload;
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: null,
    error: null,
    modal: false,
    oneProduct: {},
  },

  reducers: {
    addProduct(state, action) {
      state.products.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        image: action.payload.image,
        price: action.payload.price,
        type: action.payload.type,
      });
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    editProduct(state, action) {},
  },

  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.products = action.payload;
    },
    [fetchProducts.rejected]: setError,
    [removeProduct.rejected]: setError,
    [editOneProductAsync.fulfilled]: (state, action) => {
      state.oneProduct = action.payload;
    },
  },
});

export const { addProduct, deleteProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;
