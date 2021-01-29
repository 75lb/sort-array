type SingleOrArray<T> = T | T[];

declare enum NullRank {
    Before = -1,
    After = 1,
}

declare enum UndefinedRank {
    Before = -1,
    After = 1,
}

type PrimitiveOrders = "asc" | "desc";

declare function sortArray<SingleElement = object>(
    array: SingleElement[],
    options?: {
        // How to reference to customOrders?
        by: SingleOrArray<string | (keyof SingleElement)>;

        customOrders?: Record<string, any[]>;
        order?: SingleOrArray<PrimitiveOrders | string>;

        computed?: Record<string, (element: SingleElement) => (string | number | boolean | null)>;

        nullRank?: NullRank;
        undefinedRank?: UndefinedRank;
    },
): SingleElement[];

export = sortArray;
