import {Props} from "./block";

export type Indexed<T = any> = {
    [key in string]: T;
};

// function isArray(value: unknown): value is [] {
//     return Array.isArray(value);
// }

// merge
const merge = (lhs: Props, rhs: Props) => {
    for (let p in rhs) {
        if (!rhs.hasOwnProperty(p)) {
            continue;
        }

        try {
            if (rhs[p].constructor === Object) {
                rhs[p] = merge(lhs[p], rhs[p]);
            } else {
                lhs[p] = rhs[p];
            }
        } catch (e) {
            lhs[p] = rhs[p];
        }
    }

    return lhs;
}

// set
const set = (object: Props, path: string, value: any) => {
    const result = path.split('.').reduceRight((acc, key) => ({[key]: acc}), value as any);

    return merge(object, result);
}


export { set, merge };

