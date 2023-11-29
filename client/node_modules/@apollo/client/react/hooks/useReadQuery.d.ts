import type { QueryReference } from "../cache/QueryReference.js";
import type { ApolloError } from "../../errors/index.js";
import type { NetworkStatus } from "../../core/index.js";
export interface UseReadQueryResult<TData = unknown> {
    data: TData;
    error: ApolloError | undefined;
    networkStatus: NetworkStatus;
}
export declare function useReadQuery<TData>(queryRef: QueryReference<TData>): UseReadQueryResult<TData>;
//# sourceMappingURL=useReadQuery.d.ts.map