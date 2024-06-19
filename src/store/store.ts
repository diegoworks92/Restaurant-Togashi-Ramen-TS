import { create } from 'zustand';


// Group the state related to the menu 
export const useMenuStore = create<MenuStore>((set) => ({
    showMenu: false,
    setShowMenu: (value: boolean) => set({ showMenu: value }),

    activeButton: 1,
    setActiveButton: (value: number) => set({ activeButton: value }),

    headerButton: 1,
    setHeaderButton: (value: number) => set({ headerButton: value }),

    whereToEat: 0,
    setWhereToEat: (value: number) => set({ whereToEat: value }),

    chooseButton: 1,
    setChooseButton: (value: number) => set({ chooseButton: value }),
}));

// Group the state related to the orders
export const useOrdersStore = create<OrderStore>((set) => ({
    isOrdersActive: false,
    setIsOrdersActive: (value: boolean) => set({ isOrdersActive: value }),

    showOrder: false,
    setShowOrder: (value: boolean) => set({ showOrder: value }),

    showOrdersTab: false,
    setShowOrdersTab: (value: boolean) => set({ showOrdersTab: value }),

}));

interface CartState {
    allProducts: Product[];
    setAllProducts: (products: Product[]) => void;
    total: number;
    setTotal: (value: number) => void;
    countProducts: number;
    setCountProducts: (value: number) => void;
    selectedPlates: Product[];
    setSelectedPlates: (value: Product[] | ((prevState: Product[]) => Product[])) => void;
}

// Group the state related to the cart
export const useCartStore = create<CartState>((set) => ({
    allProducts: [],
    setAllProducts: (products) => set({ allProducts: products }),
    total: 0,
    setTotal: (value) => set({ total: value }),
    countProducts: 0,
    setCountProducts: (value) => set({ countProducts: value }),
    selectedPlates: [],
    setSelectedPlates: (value) => set((state) => ({ selectedPlates: typeof value === 'function' ? value(state.selectedPlates) : value })),
}));



// Group the state related to the user
export const useUserStore = create<UserStore>((set) => ({
name: localStorage.getItem('name') || '',
setName: (name) => {

 localStorage.setItem('name', name);
 set({ name });
},
showModal: true,
setShowModal: (value: boolean) => {

 set({ showModal: value });
},
isLoggedIn: localStorage.getItem('isLoggedIn')
 ? localStorage.getItem('isLoggedIn') === 'true'
 : false,
logIn: () => {

 localStorage.setItem('isLoggedIn', 'true');
 set(state => ({ isLoggedIn: true, userName: state.name }));
},
logOut: () => {

 localStorage.setItem('isLoggedIn', 'false');
 localStorage.setItem('name', '');
 set({ isLoggedIn: false, name: '' });
},
isActive: true,
setIsActive: (value: boolean) => set({ isActive: value }),
}));