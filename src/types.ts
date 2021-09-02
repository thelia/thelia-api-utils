export type I18n = {
  readonly chapo: string | null;
  readonly description: string | null;
  readonly metaDescription: string | null;
  readonly metaKeywords: string | null;
  readonly metaTitle: string | null;
  readonly postscriptum: string | null;
  readonly title: string | null;
};

export type Image = {
  readonly i18n: I18n;
  readonly id: number;
  readonly position: number;
  readonly url: string;
};

export type Price = {
  readonly untaxed: number;
  readonly taxed: number;
};
export type Pse = {
  readonly id: number;
  readonly default: boolean;
  readonly ean: string | null;
  readonly attributes: readonly {
    readonly id: number;
    readonly i18n: I18n;
    readonly values: readonly {
      readonly id: number;
      readonly i18n: I18n;
    }[];
  }[];
  readonly documents: readonly any[];
  readonly newness: 0 | 1;
  readonly price: Price;
  readonly promo: boolean;
  readonly promoPrice: Price;
  readonly quantity: number;
  readonly reference: string;
  readonly weight: number;
};

export type Cart = {
  readonly coupons: readonly any[];
  readonly currency: string;
  readonly delivery: number | null;
  readonly discount: number | null;
  readonly id: number;
  readonly items: readonly CartItem[];
  readonly taxes: number;
  readonly total: number;
};

export type CartItem = {
  readonly id: number;
  readonly images: readonly Image[];
  readonly price: Price;
  readonly product: {
    readonly id: number;
    readonly i18n: I18n;
    readonly images: readonly Image[];
    readonly reference: string;
    readonly url: string;
    readonly virtual: boolean;
    readonly visible: boolean;
    readonly productSaleElements: readonly Pse[];
    readonly brand: readonly {
      readonly i18n: I18n;
      readonly id: number;
      readonly visible: 0 | 1;
    }[];
    readonly defaultCategory: {
      readonly i18n: I18n;
      readonly id: number;
      readonly visible: 0 | 1;
    };
    readonly categories: readonly {
      readonly i18n: I18n;
      readonly id: number;
      readonly visible: 0 | 1;
    }[];
    readonly contents: readonly {
      readonly i18n: I18n;
      readonly id: number;
      readonly visible: 0 | 1;
    }[];
    readonly documents: readonly {
      readonly i18n: I18n;
      readonly id: number;
      readonly visible: 0 | 1;
    }[];
    readonly features: readonly {
      readonly i18n: I18n;
      readonly id: number;
      readonly visible: 0 | 1;
    }[];
  };
  readonly productSaleElement: Pse;
  readonly promo: boolean;
  readonly promoPrice: Price;
  readonly quantity: number;
};
