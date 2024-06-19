type MenuStore = {
    showMenu: boolean;
    setShowMenu: (value: boolean) => void;

    activeButton: number;
    setActiveButton: (value: number) => void;

    headerButton: number;
    setHeaderButton: (value: number) => void;

    whereToEat: number;
    setWhereToEat: (value: number) => void;

    chooseButton: number;
    setChooseButton: (value: number) => void;
};

type OrderStore = {

    isOrdersActive: boolean;
    setIsOrdersActive: (value: boolean) => void;

    showOrder: boolean; 
    setShowOrder: (value: boolean) => void;

    showOrdersTab: boolean;
    setShowOrdersTab:(value: boolean) => void;
}


type CartStore = {
    allProducts: Product[],
    setAllProducts: (value: Product[]) => void;

    total: number;
    setTotal: (value: number) => void;

    countProducts: number;
    setCountProducts: (value: number) => void;

    selectedPlates: Product[], 
    setSelectedPlates: (value: Product[]) => void;

}


type Product = {
    id: string;
    type: string;
    img: string;
    name: string;
    description: string;
    price: number;
    spicy?: boolean;
    vegetarian?: boolean;
    vegan?: boolean;
    quantity: number;
/*     inventory: string; */
    alcohol?: boolean;
}

    
    type SidebarProps = {
        theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
};


type UserStore = {
    name: string;
    setName: (value: string) => void;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
    isActive: boolean;
    setIsActive: (value: boolean) => void;
};


type UserNameType = {
    userName: string;
    setUserName: (value: string) => void;
};
