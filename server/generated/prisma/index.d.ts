
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Qtask
 * 
 */
export type Qtask = $Result.DefaultSelection<Prisma.$QtaskPayload>
/**
 * Model FocusSession
 * 
 */
export type FocusSession = $Result.DefaultSelection<Prisma.$FocusSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qtask`: Exposes CRUD operations for the **Qtask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Qtasks
    * const qtasks = await prisma.qtask.findMany()
    * ```
    */
  get qtask(): Prisma.QtaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.focusSession`: Exposes CRUD operations for the **FocusSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FocusSessions
    * const focusSessions = await prisma.focusSession.findMany()
    * ```
    */
  get focusSession(): Prisma.FocusSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Task: 'Task',
    Qtask: 'Qtask',
    FocusSession: 'FocusSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "task" | "qtask" | "focusSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Qtask: {
        payload: Prisma.$QtaskPayload<ExtArgs>
        fields: Prisma.QtaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QtaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QtaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QtaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QtaskPayload>
          }
          findFirst: {
            args: Prisma.QtaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QtaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QtaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QtaskPayload>
          }
          findMany: {
            args: Prisma.QtaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QtaskPayload>[]
          }
          create: {
            args: Prisma.QtaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QtaskPayload>
          }
          createMany: {
            args: Prisma.QtaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QtaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QtaskPayload>
          }
          update: {
            args: Prisma.QtaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QtaskPayload>
          }
          deleteMany: {
            args: Prisma.QtaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QtaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QtaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QtaskPayload>
          }
          aggregate: {
            args: Prisma.QtaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQtask>
          }
          groupBy: {
            args: Prisma.QtaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<QtaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.QtaskCountArgs<ExtArgs>
            result: $Utils.Optional<QtaskCountAggregateOutputType> | number
          }
        }
      }
      FocusSession: {
        payload: Prisma.$FocusSessionPayload<ExtArgs>
        fields: Prisma.FocusSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FocusSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FocusSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          findFirst: {
            args: Prisma.FocusSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FocusSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          findMany: {
            args: Prisma.FocusSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>[]
          }
          create: {
            args: Prisma.FocusSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          createMany: {
            args: Prisma.FocusSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FocusSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          update: {
            args: Prisma.FocusSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          deleteMany: {
            args: Prisma.FocusSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FocusSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FocusSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FocusSessionPayload>
          }
          aggregate: {
            args: Prisma.FocusSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFocusSession>
          }
          groupBy: {
            args: Prisma.FocusSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FocusSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FocusSessionCountArgs<ExtArgs>
            result: $Utils.Optional<FocusSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    task?: TaskOmit
    qtask?: QtaskOmit
    focusSession?: FocusSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tasks: number
    qtasks: number
    focusSessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    qtasks?: boolean | UserCountOutputTypeCountQtasksArgs
    focusSessions?: boolean | UserCountOutputTypeCountFocusSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QtaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFocusSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    picture: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    picture: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    picture: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    picture?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    picture?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    picture?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    picture: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    picture?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    qtasks?: boolean | User$qtasksArgs<ExtArgs>
    focusSessions?: boolean | User$focusSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    picture?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "picture", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    qtasks?: boolean | User$qtasksArgs<ExtArgs>
    focusSessions?: boolean | User$focusSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      qtasks: Prisma.$QtaskPayload<ExtArgs>[]
      focusSessions: Prisma.$FocusSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      picture: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qtasks<T extends User$qtasksArgs<ExtArgs> = {}>(args?: Subset<T, User$qtasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    focusSessions<T extends User$focusSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$focusSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.qtasks
   */
  export type User$qtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    where?: QtaskWhereInput
    orderBy?: QtaskOrderByWithRelationInput | QtaskOrderByWithRelationInput[]
    cursor?: QtaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QtaskScalarFieldEnum | QtaskScalarFieldEnum[]
  }

  /**
   * User.focusSessions
   */
  export type User$focusSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    where?: FocusSessionWhereInput
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    cursor?: FocusSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    userId: number | null
  }

  export type TaskSumAggregateOutputType = {
    userId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    created_at: Date | null
    due_date: Date | null
    priority: string | null
    note: string | null
    reason: string | null
    status: string | null
    assigned_to: string | null
    userId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    created_at: Date | null
    due_date: Date | null
    priority: string | null
    note: string | null
    reason: string | null
    status: string | null
    assigned_to: string | null
    userId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    created_at: number
    due_date: number
    priority: number
    note: number
    reason: number
    status: number
    assigned_to: number
    priority_tags: number
    userId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    userId?: true
  }

  export type TaskSumAggregateInputType = {
    userId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    due_date?: true
    priority?: true
    note?: true
    reason?: true
    status?: true
    assigned_to?: true
    userId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    due_date?: true
    priority?: true
    note?: true
    reason?: true
    status?: true
    assigned_to?: true
    userId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    due_date?: true
    priority?: true
    note?: true
    reason?: true
    status?: true
    assigned_to?: true
    priority_tags?: true
    userId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    created_at: Date
    due_date: Date | null
    priority: string
    note: string | null
    reason: string | null
    status: string
    assigned_to: string | null
    priority_tags: JsonValue | null
    userId: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    created_at?: boolean
    due_date?: boolean
    priority?: boolean
    note?: boolean
    reason?: boolean
    status?: boolean
    assigned_to?: boolean
    priority_tags?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>



  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    created_at?: boolean
    due_date?: boolean
    priority?: boolean
    note?: boolean
    reason?: boolean
    status?: boolean
    assigned_to?: boolean
    priority_tags?: boolean
    userId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "created_at" | "due_date" | "priority" | "note" | "reason" | "status" | "assigned_to" | "priority_tags" | "userId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      created_at: Date
      due_date: Date | null
      priority: string
      note: string | null
      reason: string | null
      status: string
      assigned_to: string | null
      priority_tags: Prisma.JsonValue | null
      userId: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly created_at: FieldRef<"Task", 'DateTime'>
    readonly due_date: FieldRef<"Task", 'DateTime'>
    readonly priority: FieldRef<"Task", 'String'>
    readonly note: FieldRef<"Task", 'String'>
    readonly reason: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly assigned_to: FieldRef<"Task", 'String'>
    readonly priority_tags: FieldRef<"Task", 'Json'>
    readonly userId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Qtask
   */

  export type AggregateQtask = {
    _count: QtaskCountAggregateOutputType | null
    _avg: QtaskAvgAggregateOutputType | null
    _sum: QtaskSumAggregateOutputType | null
    _min: QtaskMinAggregateOutputType | null
    _max: QtaskMaxAggregateOutputType | null
  }

  export type QtaskAvgAggregateOutputType = {
    userId: number | null
  }

  export type QtaskSumAggregateOutputType = {
    userId: number | null
  }

  export type QtaskMinAggregateOutputType = {
    id: string | null
    date: Date | null
    workTasks: string | null
    personalTasks: string | null
    notes: string | null
    timeSpent: string | null
    userId: number | null
  }

  export type QtaskMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    workTasks: string | null
    personalTasks: string | null
    notes: string | null
    timeSpent: string | null
    userId: number | null
  }

  export type QtaskCountAggregateOutputType = {
    id: number
    date: number
    workTasks: number
    personalTasks: number
    notes: number
    timeSpent: number
    userId: number
    _all: number
  }


  export type QtaskAvgAggregateInputType = {
    userId?: true
  }

  export type QtaskSumAggregateInputType = {
    userId?: true
  }

  export type QtaskMinAggregateInputType = {
    id?: true
    date?: true
    workTasks?: true
    personalTasks?: true
    notes?: true
    timeSpent?: true
    userId?: true
  }

  export type QtaskMaxAggregateInputType = {
    id?: true
    date?: true
    workTasks?: true
    personalTasks?: true
    notes?: true
    timeSpent?: true
    userId?: true
  }

  export type QtaskCountAggregateInputType = {
    id?: true
    date?: true
    workTasks?: true
    personalTasks?: true
    notes?: true
    timeSpent?: true
    userId?: true
    _all?: true
  }

  export type QtaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qtask to aggregate.
     */
    where?: QtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qtasks to fetch.
     */
    orderBy?: QtaskOrderByWithRelationInput | QtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Qtasks
    **/
    _count?: true | QtaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QtaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QtaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QtaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QtaskMaxAggregateInputType
  }

  export type GetQtaskAggregateType<T extends QtaskAggregateArgs> = {
        [P in keyof T & keyof AggregateQtask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQtask[P]>
      : GetScalarType<T[P], AggregateQtask[P]>
  }




  export type QtaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QtaskWhereInput
    orderBy?: QtaskOrderByWithAggregationInput | QtaskOrderByWithAggregationInput[]
    by: QtaskScalarFieldEnum[] | QtaskScalarFieldEnum
    having?: QtaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QtaskCountAggregateInputType | true
    _avg?: QtaskAvgAggregateInputType
    _sum?: QtaskSumAggregateInputType
    _min?: QtaskMinAggregateInputType
    _max?: QtaskMaxAggregateInputType
  }

  export type QtaskGroupByOutputType = {
    id: string
    date: Date
    workTasks: string
    personalTasks: string
    notes: string
    timeSpent: string
    userId: number
    _count: QtaskCountAggregateOutputType | null
    _avg: QtaskAvgAggregateOutputType | null
    _sum: QtaskSumAggregateOutputType | null
    _min: QtaskMinAggregateOutputType | null
    _max: QtaskMaxAggregateOutputType | null
  }

  type GetQtaskGroupByPayload<T extends QtaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QtaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QtaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QtaskGroupByOutputType[P]>
            : GetScalarType<T[P], QtaskGroupByOutputType[P]>
        }
      >
    >


  export type QtaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    workTasks?: boolean
    personalTasks?: boolean
    notes?: boolean
    timeSpent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qtask"]>



  export type QtaskSelectScalar = {
    id?: boolean
    date?: boolean
    workTasks?: boolean
    personalTasks?: boolean
    notes?: boolean
    timeSpent?: boolean
    userId?: boolean
  }

  export type QtaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "workTasks" | "personalTasks" | "notes" | "timeSpent" | "userId", ExtArgs["result"]["qtask"]>
  export type QtaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QtaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Qtask"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      workTasks: string
      personalTasks: string
      notes: string
      timeSpent: string
      userId: number
    }, ExtArgs["result"]["qtask"]>
    composites: {}
  }

  type QtaskGetPayload<S extends boolean | null | undefined | QtaskDefaultArgs> = $Result.GetResult<Prisma.$QtaskPayload, S>

  type QtaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QtaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QtaskCountAggregateInputType | true
    }

  export interface QtaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Qtask'], meta: { name: 'Qtask' } }
    /**
     * Find zero or one Qtask that matches the filter.
     * @param {QtaskFindUniqueArgs} args - Arguments to find a Qtask
     * @example
     * // Get one Qtask
     * const qtask = await prisma.qtask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QtaskFindUniqueArgs>(args: SelectSubset<T, QtaskFindUniqueArgs<ExtArgs>>): Prisma__QtaskClient<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Qtask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QtaskFindUniqueOrThrowArgs} args - Arguments to find a Qtask
     * @example
     * // Get one Qtask
     * const qtask = await prisma.qtask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QtaskFindUniqueOrThrowArgs>(args: SelectSubset<T, QtaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QtaskClient<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qtask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QtaskFindFirstArgs} args - Arguments to find a Qtask
     * @example
     * // Get one Qtask
     * const qtask = await prisma.qtask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QtaskFindFirstArgs>(args?: SelectSubset<T, QtaskFindFirstArgs<ExtArgs>>): Prisma__QtaskClient<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Qtask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QtaskFindFirstOrThrowArgs} args - Arguments to find a Qtask
     * @example
     * // Get one Qtask
     * const qtask = await prisma.qtask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QtaskFindFirstOrThrowArgs>(args?: SelectSubset<T, QtaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__QtaskClient<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Qtasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QtaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Qtasks
     * const qtasks = await prisma.qtask.findMany()
     * 
     * // Get first 10 Qtasks
     * const qtasks = await prisma.qtask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qtaskWithIdOnly = await prisma.qtask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QtaskFindManyArgs>(args?: SelectSubset<T, QtaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Qtask.
     * @param {QtaskCreateArgs} args - Arguments to create a Qtask.
     * @example
     * // Create one Qtask
     * const Qtask = await prisma.qtask.create({
     *   data: {
     *     // ... data to create a Qtask
     *   }
     * })
     * 
     */
    create<T extends QtaskCreateArgs>(args: SelectSubset<T, QtaskCreateArgs<ExtArgs>>): Prisma__QtaskClient<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Qtasks.
     * @param {QtaskCreateManyArgs} args - Arguments to create many Qtasks.
     * @example
     * // Create many Qtasks
     * const qtask = await prisma.qtask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QtaskCreateManyArgs>(args?: SelectSubset<T, QtaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Qtask.
     * @param {QtaskDeleteArgs} args - Arguments to delete one Qtask.
     * @example
     * // Delete one Qtask
     * const Qtask = await prisma.qtask.delete({
     *   where: {
     *     // ... filter to delete one Qtask
     *   }
     * })
     * 
     */
    delete<T extends QtaskDeleteArgs>(args: SelectSubset<T, QtaskDeleteArgs<ExtArgs>>): Prisma__QtaskClient<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Qtask.
     * @param {QtaskUpdateArgs} args - Arguments to update one Qtask.
     * @example
     * // Update one Qtask
     * const qtask = await prisma.qtask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QtaskUpdateArgs>(args: SelectSubset<T, QtaskUpdateArgs<ExtArgs>>): Prisma__QtaskClient<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Qtasks.
     * @param {QtaskDeleteManyArgs} args - Arguments to filter Qtasks to delete.
     * @example
     * // Delete a few Qtasks
     * const { count } = await prisma.qtask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QtaskDeleteManyArgs>(args?: SelectSubset<T, QtaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Qtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QtaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Qtasks
     * const qtask = await prisma.qtask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QtaskUpdateManyArgs>(args: SelectSubset<T, QtaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Qtask.
     * @param {QtaskUpsertArgs} args - Arguments to update or create a Qtask.
     * @example
     * // Update or create a Qtask
     * const qtask = await prisma.qtask.upsert({
     *   create: {
     *     // ... data to create a Qtask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Qtask we want to update
     *   }
     * })
     */
    upsert<T extends QtaskUpsertArgs>(args: SelectSubset<T, QtaskUpsertArgs<ExtArgs>>): Prisma__QtaskClient<$Result.GetResult<Prisma.$QtaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Qtasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QtaskCountArgs} args - Arguments to filter Qtasks to count.
     * @example
     * // Count the number of Qtasks
     * const count = await prisma.qtask.count({
     *   where: {
     *     // ... the filter for the Qtasks we want to count
     *   }
     * })
    **/
    count<T extends QtaskCountArgs>(
      args?: Subset<T, QtaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QtaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Qtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QtaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QtaskAggregateArgs>(args: Subset<T, QtaskAggregateArgs>): Prisma.PrismaPromise<GetQtaskAggregateType<T>>

    /**
     * Group by Qtask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QtaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QtaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QtaskGroupByArgs['orderBy'] }
        : { orderBy?: QtaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QtaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQtaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Qtask model
   */
  readonly fields: QtaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Qtask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QtaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Qtask model
   */
  interface QtaskFieldRefs {
    readonly id: FieldRef<"Qtask", 'String'>
    readonly date: FieldRef<"Qtask", 'DateTime'>
    readonly workTasks: FieldRef<"Qtask", 'String'>
    readonly personalTasks: FieldRef<"Qtask", 'String'>
    readonly notes: FieldRef<"Qtask", 'String'>
    readonly timeSpent: FieldRef<"Qtask", 'String'>
    readonly userId: FieldRef<"Qtask", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Qtask findUnique
   */
  export type QtaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    /**
     * Filter, which Qtask to fetch.
     */
    where: QtaskWhereUniqueInput
  }

  /**
   * Qtask findUniqueOrThrow
   */
  export type QtaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    /**
     * Filter, which Qtask to fetch.
     */
    where: QtaskWhereUniqueInput
  }

  /**
   * Qtask findFirst
   */
  export type QtaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    /**
     * Filter, which Qtask to fetch.
     */
    where?: QtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qtasks to fetch.
     */
    orderBy?: QtaskOrderByWithRelationInput | QtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qtasks.
     */
    cursor?: QtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qtasks.
     */
    distinct?: QtaskScalarFieldEnum | QtaskScalarFieldEnum[]
  }

  /**
   * Qtask findFirstOrThrow
   */
  export type QtaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    /**
     * Filter, which Qtask to fetch.
     */
    where?: QtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qtasks to fetch.
     */
    orderBy?: QtaskOrderByWithRelationInput | QtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Qtasks.
     */
    cursor?: QtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qtasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Qtasks.
     */
    distinct?: QtaskScalarFieldEnum | QtaskScalarFieldEnum[]
  }

  /**
   * Qtask findMany
   */
  export type QtaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    /**
     * Filter, which Qtasks to fetch.
     */
    where?: QtaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Qtasks to fetch.
     */
    orderBy?: QtaskOrderByWithRelationInput | QtaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Qtasks.
     */
    cursor?: QtaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Qtasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Qtasks.
     */
    skip?: number
    distinct?: QtaskScalarFieldEnum | QtaskScalarFieldEnum[]
  }

  /**
   * Qtask create
   */
  export type QtaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Qtask.
     */
    data: XOR<QtaskCreateInput, QtaskUncheckedCreateInput>
  }

  /**
   * Qtask createMany
   */
  export type QtaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Qtasks.
     */
    data: QtaskCreateManyInput | QtaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Qtask update
   */
  export type QtaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Qtask.
     */
    data: XOR<QtaskUpdateInput, QtaskUncheckedUpdateInput>
    /**
     * Choose, which Qtask to update.
     */
    where: QtaskWhereUniqueInput
  }

  /**
   * Qtask updateMany
   */
  export type QtaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Qtasks.
     */
    data: XOR<QtaskUpdateManyMutationInput, QtaskUncheckedUpdateManyInput>
    /**
     * Filter which Qtasks to update
     */
    where?: QtaskWhereInput
    /**
     * Limit how many Qtasks to update.
     */
    limit?: number
  }

  /**
   * Qtask upsert
   */
  export type QtaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Qtask to update in case it exists.
     */
    where: QtaskWhereUniqueInput
    /**
     * In case the Qtask found by the `where` argument doesn't exist, create a new Qtask with this data.
     */
    create: XOR<QtaskCreateInput, QtaskUncheckedCreateInput>
    /**
     * In case the Qtask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QtaskUpdateInput, QtaskUncheckedUpdateInput>
  }

  /**
   * Qtask delete
   */
  export type QtaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
    /**
     * Filter which Qtask to delete.
     */
    where: QtaskWhereUniqueInput
  }

  /**
   * Qtask deleteMany
   */
  export type QtaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Qtasks to delete
     */
    where?: QtaskWhereInput
    /**
     * Limit how many Qtasks to delete.
     */
    limit?: number
  }

  /**
   * Qtask without action
   */
  export type QtaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Qtask
     */
    select?: QtaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Qtask
     */
    omit?: QtaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QtaskInclude<ExtArgs> | null
  }


  /**
   * Model FocusSession
   */

  export type AggregateFocusSession = {
    _count: FocusSessionCountAggregateOutputType | null
    _avg: FocusSessionAvgAggregateOutputType | null
    _sum: FocusSessionSumAggregateOutputType | null
    _min: FocusSessionMinAggregateOutputType | null
    _max: FocusSessionMaxAggregateOutputType | null
  }

  export type FocusSessionAvgAggregateOutputType = {
    timeSpent: number | null
    userId: number | null
  }

  export type FocusSessionSumAggregateOutputType = {
    timeSpent: number | null
    userId: number | null
  }

  export type FocusSessionMinAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    timeSpent: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type FocusSessionMaxAggregateOutputType = {
    id: string | null
    startTime: Date | null
    endTime: Date | null
    timeSpent: number | null
    createdAt: Date | null
    userId: number | null
  }

  export type FocusSessionCountAggregateOutputType = {
    id: number
    startTime: number
    endTime: number
    timeSpent: number
    completedTasks: number
    createdAt: number
    taskChanges: number
    userId: number
    _all: number
  }


  export type FocusSessionAvgAggregateInputType = {
    timeSpent?: true
    userId?: true
  }

  export type FocusSessionSumAggregateInputType = {
    timeSpent?: true
    userId?: true
  }

  export type FocusSessionMinAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    timeSpent?: true
    createdAt?: true
    userId?: true
  }

  export type FocusSessionMaxAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    timeSpent?: true
    createdAt?: true
    userId?: true
  }

  export type FocusSessionCountAggregateInputType = {
    id?: true
    startTime?: true
    endTime?: true
    timeSpent?: true
    completedTasks?: true
    createdAt?: true
    taskChanges?: true
    userId?: true
    _all?: true
  }

  export type FocusSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusSession to aggregate.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FocusSessions
    **/
    _count?: true | FocusSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FocusSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FocusSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FocusSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FocusSessionMaxAggregateInputType
  }

  export type GetFocusSessionAggregateType<T extends FocusSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateFocusSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFocusSession[P]>
      : GetScalarType<T[P], AggregateFocusSession[P]>
  }




  export type FocusSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FocusSessionWhereInput
    orderBy?: FocusSessionOrderByWithAggregationInput | FocusSessionOrderByWithAggregationInput[]
    by: FocusSessionScalarFieldEnum[] | FocusSessionScalarFieldEnum
    having?: FocusSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FocusSessionCountAggregateInputType | true
    _avg?: FocusSessionAvgAggregateInputType
    _sum?: FocusSessionSumAggregateInputType
    _min?: FocusSessionMinAggregateInputType
    _max?: FocusSessionMaxAggregateInputType
  }

  export type FocusSessionGroupByOutputType = {
    id: string
    startTime: Date
    endTime: Date
    timeSpent: number
    completedTasks: JsonValue
    createdAt: Date
    taskChanges: JsonValue | null
    userId: number
    _count: FocusSessionCountAggregateOutputType | null
    _avg: FocusSessionAvgAggregateOutputType | null
    _sum: FocusSessionSumAggregateOutputType | null
    _min: FocusSessionMinAggregateOutputType | null
    _max: FocusSessionMaxAggregateOutputType | null
  }

  type GetFocusSessionGroupByPayload<T extends FocusSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FocusSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FocusSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FocusSessionGroupByOutputType[P]>
            : GetScalarType<T[P], FocusSessionGroupByOutputType[P]>
        }
      >
    >


  export type FocusSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    timeSpent?: boolean
    completedTasks?: boolean
    createdAt?: boolean
    taskChanges?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["focusSession"]>



  export type FocusSessionSelectScalar = {
    id?: boolean
    startTime?: boolean
    endTime?: boolean
    timeSpent?: boolean
    completedTasks?: boolean
    createdAt?: boolean
    taskChanges?: boolean
    userId?: boolean
  }

  export type FocusSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startTime" | "endTime" | "timeSpent" | "completedTasks" | "createdAt" | "taskChanges" | "userId", ExtArgs["result"]["focusSession"]>
  export type FocusSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FocusSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FocusSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startTime: Date
      endTime: Date
      timeSpent: number
      completedTasks: Prisma.JsonValue
      createdAt: Date
      taskChanges: Prisma.JsonValue | null
      userId: number
    }, ExtArgs["result"]["focusSession"]>
    composites: {}
  }

  type FocusSessionGetPayload<S extends boolean | null | undefined | FocusSessionDefaultArgs> = $Result.GetResult<Prisma.$FocusSessionPayload, S>

  type FocusSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FocusSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FocusSessionCountAggregateInputType | true
    }

  export interface FocusSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FocusSession'], meta: { name: 'FocusSession' } }
    /**
     * Find zero or one FocusSession that matches the filter.
     * @param {FocusSessionFindUniqueArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FocusSessionFindUniqueArgs>(args: SelectSubset<T, FocusSessionFindUniqueArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FocusSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FocusSessionFindUniqueOrThrowArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FocusSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, FocusSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindFirstArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FocusSessionFindFirstArgs>(args?: SelectSubset<T, FocusSessionFindFirstArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FocusSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindFirstOrThrowArgs} args - Arguments to find a FocusSession
     * @example
     * // Get one FocusSession
     * const focusSession = await prisma.focusSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FocusSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, FocusSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FocusSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FocusSessions
     * const focusSessions = await prisma.focusSession.findMany()
     * 
     * // Get first 10 FocusSessions
     * const focusSessions = await prisma.focusSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const focusSessionWithIdOnly = await prisma.focusSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FocusSessionFindManyArgs>(args?: SelectSubset<T, FocusSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FocusSession.
     * @param {FocusSessionCreateArgs} args - Arguments to create a FocusSession.
     * @example
     * // Create one FocusSession
     * const FocusSession = await prisma.focusSession.create({
     *   data: {
     *     // ... data to create a FocusSession
     *   }
     * })
     * 
     */
    create<T extends FocusSessionCreateArgs>(args: SelectSubset<T, FocusSessionCreateArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FocusSessions.
     * @param {FocusSessionCreateManyArgs} args - Arguments to create many FocusSessions.
     * @example
     * // Create many FocusSessions
     * const focusSession = await prisma.focusSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FocusSessionCreateManyArgs>(args?: SelectSubset<T, FocusSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FocusSession.
     * @param {FocusSessionDeleteArgs} args - Arguments to delete one FocusSession.
     * @example
     * // Delete one FocusSession
     * const FocusSession = await prisma.focusSession.delete({
     *   where: {
     *     // ... filter to delete one FocusSession
     *   }
     * })
     * 
     */
    delete<T extends FocusSessionDeleteArgs>(args: SelectSubset<T, FocusSessionDeleteArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FocusSession.
     * @param {FocusSessionUpdateArgs} args - Arguments to update one FocusSession.
     * @example
     * // Update one FocusSession
     * const focusSession = await prisma.focusSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FocusSessionUpdateArgs>(args: SelectSubset<T, FocusSessionUpdateArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FocusSessions.
     * @param {FocusSessionDeleteManyArgs} args - Arguments to filter FocusSessions to delete.
     * @example
     * // Delete a few FocusSessions
     * const { count } = await prisma.focusSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FocusSessionDeleteManyArgs>(args?: SelectSubset<T, FocusSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FocusSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FocusSessions
     * const focusSession = await prisma.focusSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FocusSessionUpdateManyArgs>(args: SelectSubset<T, FocusSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FocusSession.
     * @param {FocusSessionUpsertArgs} args - Arguments to update or create a FocusSession.
     * @example
     * // Update or create a FocusSession
     * const focusSession = await prisma.focusSession.upsert({
     *   create: {
     *     // ... data to create a FocusSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FocusSession we want to update
     *   }
     * })
     */
    upsert<T extends FocusSessionUpsertArgs>(args: SelectSubset<T, FocusSessionUpsertArgs<ExtArgs>>): Prisma__FocusSessionClient<$Result.GetResult<Prisma.$FocusSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FocusSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionCountArgs} args - Arguments to filter FocusSessions to count.
     * @example
     * // Count the number of FocusSessions
     * const count = await prisma.focusSession.count({
     *   where: {
     *     // ... the filter for the FocusSessions we want to count
     *   }
     * })
    **/
    count<T extends FocusSessionCountArgs>(
      args?: Subset<T, FocusSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FocusSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FocusSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FocusSessionAggregateArgs>(args: Subset<T, FocusSessionAggregateArgs>): Prisma.PrismaPromise<GetFocusSessionAggregateType<T>>

    /**
     * Group by FocusSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FocusSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FocusSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FocusSessionGroupByArgs['orderBy'] }
        : { orderBy?: FocusSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FocusSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFocusSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FocusSession model
   */
  readonly fields: FocusSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FocusSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FocusSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FocusSession model
   */
  interface FocusSessionFieldRefs {
    readonly id: FieldRef<"FocusSession", 'String'>
    readonly startTime: FieldRef<"FocusSession", 'DateTime'>
    readonly endTime: FieldRef<"FocusSession", 'DateTime'>
    readonly timeSpent: FieldRef<"FocusSession", 'Int'>
    readonly completedTasks: FieldRef<"FocusSession", 'Json'>
    readonly createdAt: FieldRef<"FocusSession", 'DateTime'>
    readonly taskChanges: FieldRef<"FocusSession", 'Json'>
    readonly userId: FieldRef<"FocusSession", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FocusSession findUnique
   */
  export type FocusSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession findUniqueOrThrow
   */
  export type FocusSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession findFirst
   */
  export type FocusSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession findFirstOrThrow
   */
  export type FocusSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSession to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FocusSessions.
     */
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession findMany
   */
  export type FocusSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter, which FocusSessions to fetch.
     */
    where?: FocusSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FocusSessions to fetch.
     */
    orderBy?: FocusSessionOrderByWithRelationInput | FocusSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FocusSessions.
     */
    cursor?: FocusSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FocusSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FocusSessions.
     */
    skip?: number
    distinct?: FocusSessionScalarFieldEnum | FocusSessionScalarFieldEnum[]
  }

  /**
   * FocusSession create
   */
  export type FocusSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a FocusSession.
     */
    data: XOR<FocusSessionCreateInput, FocusSessionUncheckedCreateInput>
  }

  /**
   * FocusSession createMany
   */
  export type FocusSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FocusSessions.
     */
    data: FocusSessionCreateManyInput | FocusSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FocusSession update
   */
  export type FocusSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a FocusSession.
     */
    data: XOR<FocusSessionUpdateInput, FocusSessionUncheckedUpdateInput>
    /**
     * Choose, which FocusSession to update.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession updateMany
   */
  export type FocusSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FocusSessions.
     */
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyInput>
    /**
     * Filter which FocusSessions to update
     */
    where?: FocusSessionWhereInput
    /**
     * Limit how many FocusSessions to update.
     */
    limit?: number
  }

  /**
   * FocusSession upsert
   */
  export type FocusSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the FocusSession to update in case it exists.
     */
    where: FocusSessionWhereUniqueInput
    /**
     * In case the FocusSession found by the `where` argument doesn't exist, create a new FocusSession with this data.
     */
    create: XOR<FocusSessionCreateInput, FocusSessionUncheckedCreateInput>
    /**
     * In case the FocusSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FocusSessionUpdateInput, FocusSessionUncheckedUpdateInput>
  }

  /**
   * FocusSession delete
   */
  export type FocusSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
    /**
     * Filter which FocusSession to delete.
     */
    where: FocusSessionWhereUniqueInput
  }

  /**
   * FocusSession deleteMany
   */
  export type FocusSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FocusSessions to delete
     */
    where?: FocusSessionWhereInput
    /**
     * Limit how many FocusSessions to delete.
     */
    limit?: number
  }

  /**
   * FocusSession without action
   */
  export type FocusSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FocusSession
     */
    select?: FocusSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FocusSession
     */
    omit?: FocusSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FocusSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    picture: 'picture'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    created_at: 'created_at',
    due_date: 'due_date',
    priority: 'priority',
    note: 'note',
    reason: 'reason',
    status: 'status',
    assigned_to: 'assigned_to',
    priority_tags: 'priority_tags',
    userId: 'userId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const QtaskScalarFieldEnum: {
    id: 'id',
    date: 'date',
    workTasks: 'workTasks',
    personalTasks: 'personalTasks',
    notes: 'notes',
    timeSpent: 'timeSpent',
    userId: 'userId'
  };

  export type QtaskScalarFieldEnum = (typeof QtaskScalarFieldEnum)[keyof typeof QtaskScalarFieldEnum]


  export const FocusSessionScalarFieldEnum: {
    id: 'id',
    startTime: 'startTime',
    endTime: 'endTime',
    timeSpent: 'timeSpent',
    completedTasks: 'completedTasks',
    createdAt: 'createdAt',
    taskChanges: 'taskChanges',
    userId: 'userId'
  };

  export type FocusSessionScalarFieldEnum = (typeof FocusSessionScalarFieldEnum)[keyof typeof FocusSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    picture: 'picture'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const TaskOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    priority: 'priority',
    note: 'note',
    reason: 'reason',
    status: 'status',
    assigned_to: 'assigned_to'
  };

  export type TaskOrderByRelevanceFieldEnum = (typeof TaskOrderByRelevanceFieldEnum)[keyof typeof TaskOrderByRelevanceFieldEnum]


  export const QtaskOrderByRelevanceFieldEnum: {
    id: 'id',
    workTasks: 'workTasks',
    personalTasks: 'personalTasks',
    notes: 'notes',
    timeSpent: 'timeSpent'
  };

  export type QtaskOrderByRelevanceFieldEnum = (typeof QtaskOrderByRelevanceFieldEnum)[keyof typeof QtaskOrderByRelevanceFieldEnum]


  export const FocusSessionOrderByRelevanceFieldEnum: {
    id: 'id'
  };

  export type FocusSessionOrderByRelevanceFieldEnum = (typeof FocusSessionOrderByRelevanceFieldEnum)[keyof typeof FocusSessionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    picture?: StringFilter<"User"> | string
    tasks?: TaskListRelationFilter
    qtasks?: QtaskListRelationFilter
    focusSessions?: FocusSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    qtasks?: QtaskOrderByRelationAggregateInput
    focusSessions?: FocusSessionOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    picture?: StringFilter<"User"> | string
    tasks?: TaskListRelationFilter
    qtasks?: QtaskListRelationFilter
    focusSessions?: FocusSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    picture?: StringWithAggregatesFilter<"User"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    created_at?: DateTimeFilter<"Task"> | Date | string
    due_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    priority?: StringFilter<"Task"> | string
    note?: StringNullableFilter<"Task"> | string | null
    reason?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    assigned_to?: StringNullableFilter<"Task"> | string | null
    priority_tags?: JsonNullableFilter<"Task">
    userId?: IntFilter<"Task"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrderInput | SortOrder
    priority?: SortOrder
    note?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    assigned_to?: SortOrderInput | SortOrder
    priority_tags?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: TaskOrderByRelevanceInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    created_at?: DateTimeFilter<"Task"> | Date | string
    due_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    priority?: StringFilter<"Task"> | string
    note?: StringNullableFilter<"Task"> | string | null
    reason?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    assigned_to?: StringNullableFilter<"Task"> | string | null
    priority_tags?: JsonNullableFilter<"Task">
    userId?: IntFilter<"Task"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrderInput | SortOrder
    priority?: SortOrder
    note?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    assigned_to?: SortOrderInput | SortOrder
    priority_tags?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    created_at?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    due_date?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    priority?: StringWithAggregatesFilter<"Task"> | string
    note?: StringNullableWithAggregatesFilter<"Task"> | string | null
    reason?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: StringWithAggregatesFilter<"Task"> | string
    assigned_to?: StringNullableWithAggregatesFilter<"Task"> | string | null
    priority_tags?: JsonNullableWithAggregatesFilter<"Task">
    userId?: IntWithAggregatesFilter<"Task"> | number
  }

  export type QtaskWhereInput = {
    AND?: QtaskWhereInput | QtaskWhereInput[]
    OR?: QtaskWhereInput[]
    NOT?: QtaskWhereInput | QtaskWhereInput[]
    id?: StringFilter<"Qtask"> | string
    date?: DateTimeFilter<"Qtask"> | Date | string
    workTasks?: StringFilter<"Qtask"> | string
    personalTasks?: StringFilter<"Qtask"> | string
    notes?: StringFilter<"Qtask"> | string
    timeSpent?: StringFilter<"Qtask"> | string
    userId?: IntFilter<"Qtask"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QtaskOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    workTasks?: SortOrder
    personalTasks?: SortOrder
    notes?: SortOrder
    timeSpent?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: QtaskOrderByRelevanceInput
  }

  export type QtaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QtaskWhereInput | QtaskWhereInput[]
    OR?: QtaskWhereInput[]
    NOT?: QtaskWhereInput | QtaskWhereInput[]
    date?: DateTimeFilter<"Qtask"> | Date | string
    workTasks?: StringFilter<"Qtask"> | string
    personalTasks?: StringFilter<"Qtask"> | string
    notes?: StringFilter<"Qtask"> | string
    timeSpent?: StringFilter<"Qtask"> | string
    userId?: IntFilter<"Qtask"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type QtaskOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    workTasks?: SortOrder
    personalTasks?: SortOrder
    notes?: SortOrder
    timeSpent?: SortOrder
    userId?: SortOrder
    _count?: QtaskCountOrderByAggregateInput
    _avg?: QtaskAvgOrderByAggregateInput
    _max?: QtaskMaxOrderByAggregateInput
    _min?: QtaskMinOrderByAggregateInput
    _sum?: QtaskSumOrderByAggregateInput
  }

  export type QtaskScalarWhereWithAggregatesInput = {
    AND?: QtaskScalarWhereWithAggregatesInput | QtaskScalarWhereWithAggregatesInput[]
    OR?: QtaskScalarWhereWithAggregatesInput[]
    NOT?: QtaskScalarWhereWithAggregatesInput | QtaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Qtask"> | string
    date?: DateTimeWithAggregatesFilter<"Qtask"> | Date | string
    workTasks?: StringWithAggregatesFilter<"Qtask"> | string
    personalTasks?: StringWithAggregatesFilter<"Qtask"> | string
    notes?: StringWithAggregatesFilter<"Qtask"> | string
    timeSpent?: StringWithAggregatesFilter<"Qtask"> | string
    userId?: IntWithAggregatesFilter<"Qtask"> | number
  }

  export type FocusSessionWhereInput = {
    AND?: FocusSessionWhereInput | FocusSessionWhereInput[]
    OR?: FocusSessionWhereInput[]
    NOT?: FocusSessionWhereInput | FocusSessionWhereInput[]
    id?: StringFilter<"FocusSession"> | string
    startTime?: DateTimeFilter<"FocusSession"> | Date | string
    endTime?: DateTimeFilter<"FocusSession"> | Date | string
    timeSpent?: IntFilter<"FocusSession"> | number
    completedTasks?: JsonFilter<"FocusSession">
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    taskChanges?: JsonNullableFilter<"FocusSession">
    userId?: IntFilter<"FocusSession"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FocusSessionOrderByWithRelationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timeSpent?: SortOrder
    completedTasks?: SortOrder
    createdAt?: SortOrder
    taskChanges?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: FocusSessionOrderByRelevanceInput
  }

  export type FocusSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FocusSessionWhereInput | FocusSessionWhereInput[]
    OR?: FocusSessionWhereInput[]
    NOT?: FocusSessionWhereInput | FocusSessionWhereInput[]
    startTime?: DateTimeFilter<"FocusSession"> | Date | string
    endTime?: DateTimeFilter<"FocusSession"> | Date | string
    timeSpent?: IntFilter<"FocusSession"> | number
    completedTasks?: JsonFilter<"FocusSession">
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    taskChanges?: JsonNullableFilter<"FocusSession">
    userId?: IntFilter<"FocusSession"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FocusSessionOrderByWithAggregationInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timeSpent?: SortOrder
    completedTasks?: SortOrder
    createdAt?: SortOrder
    taskChanges?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: FocusSessionCountOrderByAggregateInput
    _avg?: FocusSessionAvgOrderByAggregateInput
    _max?: FocusSessionMaxOrderByAggregateInput
    _min?: FocusSessionMinOrderByAggregateInput
    _sum?: FocusSessionSumOrderByAggregateInput
  }

  export type FocusSessionScalarWhereWithAggregatesInput = {
    AND?: FocusSessionScalarWhereWithAggregatesInput | FocusSessionScalarWhereWithAggregatesInput[]
    OR?: FocusSessionScalarWhereWithAggregatesInput[]
    NOT?: FocusSessionScalarWhereWithAggregatesInput | FocusSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FocusSession"> | string
    startTime?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
    timeSpent?: IntWithAggregatesFilter<"FocusSession"> | number
    completedTasks?: JsonWithAggregatesFilter<"FocusSession">
    createdAt?: DateTimeWithAggregatesFilter<"FocusSession"> | Date | string
    taskChanges?: JsonNullableWithAggregatesFilter<"FocusSession">
    userId?: IntWithAggregatesFilter<"FocusSession"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    picture: string
    tasks?: TaskCreateNestedManyWithoutUserInput
    qtasks?: QtaskCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    picture: string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    qtasks?: QtaskUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    qtasks?: QtaskUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    qtasks?: QtaskUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    picture: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    created_at?: Date | string
    due_date?: Date | string | null
    priority: string
    note?: string | null
    reason?: string | null
    status: string
    assigned_to?: string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    created_at?: Date | string
    due_date?: Date | string | null
    priority: string
    note?: string | null
    reason?: string | null
    status: string
    assigned_to?: string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
    userId: number
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    created_at?: Date | string
    due_date?: Date | string | null
    priority: string
    note?: string | null
    reason?: string | null
    status: string
    assigned_to?: string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
    userId: number
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type QtaskCreateInput = {
    id?: string
    date: Date | string
    workTasks: string
    personalTasks: string
    notes: string
    timeSpent: string
    user: UserCreateNestedOneWithoutQtasksInput
  }

  export type QtaskUncheckedCreateInput = {
    id?: string
    date: Date | string
    workTasks: string
    personalTasks: string
    notes: string
    timeSpent: string
    userId: number
  }

  export type QtaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: StringFieldUpdateOperationsInput | string
    personalTasks?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    timeSpent?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutQtasksNestedInput
  }

  export type QtaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: StringFieldUpdateOperationsInput | string
    personalTasks?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    timeSpent?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type QtaskCreateManyInput = {
    id?: string
    date: Date | string
    workTasks: string
    personalTasks: string
    notes: string
    timeSpent: string
    userId: number
  }

  export type QtaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: StringFieldUpdateOperationsInput | string
    personalTasks?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    timeSpent?: StringFieldUpdateOperationsInput | string
  }

  export type QtaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: StringFieldUpdateOperationsInput | string
    personalTasks?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    timeSpent?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FocusSessionCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    timeSpent: number
    completedTasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutFocusSessionsInput
  }

  export type FocusSessionUncheckedCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    timeSpent: number
    completedTasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
    userId: number
  }

  export type FocusSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSpent?: IntFieldUpdateOperationsInput | number
    completedTasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutFocusSessionsNestedInput
  }

  export type FocusSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSpent?: IntFieldUpdateOperationsInput | number
    completedTasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FocusSessionCreateManyInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    timeSpent: number
    completedTasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
    userId: number
  }

  export type FocusSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSpent?: IntFieldUpdateOperationsInput | number
    completedTasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FocusSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSpent?: IntFieldUpdateOperationsInput | number
    completedTasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type QtaskListRelationFilter = {
    every?: QtaskWhereInput
    some?: QtaskWhereInput
    none?: QtaskWhereInput
  }

  export type FocusSessionListRelationFilter = {
    every?: FocusSessionWhereInput
    some?: FocusSessionWhereInput
    none?: FocusSessionWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QtaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FocusSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    picture?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelevanceInput = {
    fields: TaskOrderByRelevanceFieldEnum | TaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrder
    priority?: SortOrder
    note?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    assigned_to?: SortOrder
    priority_tags?: SortOrder
    userId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrder
    priority?: SortOrder
    note?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    assigned_to?: SortOrder
    userId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    due_date?: SortOrder
    priority?: SortOrder
    note?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    assigned_to?: SortOrder
    userId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type QtaskOrderByRelevanceInput = {
    fields: QtaskOrderByRelevanceFieldEnum | QtaskOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QtaskCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workTasks?: SortOrder
    personalTasks?: SortOrder
    notes?: SortOrder
    timeSpent?: SortOrder
    userId?: SortOrder
  }

  export type QtaskAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type QtaskMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workTasks?: SortOrder
    personalTasks?: SortOrder
    notes?: SortOrder
    timeSpent?: SortOrder
    userId?: SortOrder
  }

  export type QtaskMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    workTasks?: SortOrder
    personalTasks?: SortOrder
    notes?: SortOrder
    timeSpent?: SortOrder
    userId?: SortOrder
  }

  export type QtaskSumOrderByAggregateInput = {
    userId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FocusSessionOrderByRelevanceInput = {
    fields: FocusSessionOrderByRelevanceFieldEnum | FocusSessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FocusSessionCountOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timeSpent?: SortOrder
    completedTasks?: SortOrder
    createdAt?: SortOrder
    taskChanges?: SortOrder
    userId?: SortOrder
  }

  export type FocusSessionAvgOrderByAggregateInput = {
    timeSpent?: SortOrder
    userId?: SortOrder
  }

  export type FocusSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timeSpent?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FocusSessionMinOrderByAggregateInput = {
    id?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timeSpent?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FocusSessionSumOrderByAggregateInput = {
    timeSpent?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type QtaskCreateNestedManyWithoutUserInput = {
    create?: XOR<QtaskCreateWithoutUserInput, QtaskUncheckedCreateWithoutUserInput> | QtaskCreateWithoutUserInput[] | QtaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QtaskCreateOrConnectWithoutUserInput | QtaskCreateOrConnectWithoutUserInput[]
    createMany?: QtaskCreateManyUserInputEnvelope
    connect?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
  }

  export type FocusSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type QtaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QtaskCreateWithoutUserInput, QtaskUncheckedCreateWithoutUserInput> | QtaskCreateWithoutUserInput[] | QtaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QtaskCreateOrConnectWithoutUserInput | QtaskCreateOrConnectWithoutUserInput[]
    createMany?: QtaskCreateManyUserInputEnvelope
    connect?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
  }

  export type FocusSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type QtaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<QtaskCreateWithoutUserInput, QtaskUncheckedCreateWithoutUserInput> | QtaskCreateWithoutUserInput[] | QtaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QtaskCreateOrConnectWithoutUserInput | QtaskCreateOrConnectWithoutUserInput[]
    upsert?: QtaskUpsertWithWhereUniqueWithoutUserInput | QtaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QtaskCreateManyUserInputEnvelope
    set?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
    disconnect?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
    delete?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
    connect?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
    update?: QtaskUpdateWithWhereUniqueWithoutUserInput | QtaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QtaskUpdateManyWithWhereWithoutUserInput | QtaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QtaskScalarWhereInput | QtaskScalarWhereInput[]
  }

  export type FocusSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutUserInput | FocusSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutUserInput | FocusSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutUserInput | FocusSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type QtaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QtaskCreateWithoutUserInput, QtaskUncheckedCreateWithoutUserInput> | QtaskCreateWithoutUserInput[] | QtaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QtaskCreateOrConnectWithoutUserInput | QtaskCreateOrConnectWithoutUserInput[]
    upsert?: QtaskUpsertWithWhereUniqueWithoutUserInput | QtaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QtaskCreateManyUserInputEnvelope
    set?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
    disconnect?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
    delete?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
    connect?: QtaskWhereUniqueInput | QtaskWhereUniqueInput[]
    update?: QtaskUpdateWithWhereUniqueWithoutUserInput | QtaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QtaskUpdateManyWithWhereWithoutUserInput | QtaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QtaskScalarWhereInput | QtaskScalarWhereInput[]
  }

  export type FocusSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput> | FocusSessionCreateWithoutUserInput[] | FocusSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FocusSessionCreateOrConnectWithoutUserInput | FocusSessionCreateOrConnectWithoutUserInput[]
    upsert?: FocusSessionUpsertWithWhereUniqueWithoutUserInput | FocusSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FocusSessionCreateManyUserInputEnvelope
    set?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    disconnect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    delete?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    connect?: FocusSessionWhereUniqueInput | FocusSessionWhereUniqueInput[]
    update?: FocusSessionUpdateWithWhereUniqueWithoutUserInput | FocusSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FocusSessionUpdateManyWithWhereWithoutUserInput | FocusSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserCreateNestedOneWithoutQtasksInput = {
    create?: XOR<UserCreateWithoutQtasksInput, UserUncheckedCreateWithoutQtasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutQtasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutQtasksNestedInput = {
    create?: XOR<UserCreateWithoutQtasksInput, UserUncheckedCreateWithoutQtasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutQtasksInput
    upsert?: UserUpsertWithoutQtasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQtasksInput, UserUpdateWithoutQtasksInput>, UserUncheckedUpdateWithoutQtasksInput>
  }

  export type UserCreateNestedOneWithoutFocusSessionsInput = {
    create?: XOR<UserCreateWithoutFocusSessionsInput, UserUncheckedCreateWithoutFocusSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFocusSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFocusSessionsNestedInput = {
    create?: XOR<UserCreateWithoutFocusSessionsInput, UserUncheckedCreateWithoutFocusSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFocusSessionsInput
    upsert?: UserUpsertWithoutFocusSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFocusSessionsInput, UserUpdateWithoutFocusSessionsInput>, UserUncheckedUpdateWithoutFocusSessionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    title: string
    created_at?: Date | string
    due_date?: Date | string | null
    priority: string
    note?: string | null
    reason?: string | null
    status: string
    assigned_to?: string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    created_at?: Date | string
    due_date?: Date | string | null
    priority: string
    note?: string | null
    reason?: string | null
    status: string
    assigned_to?: string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QtaskCreateWithoutUserInput = {
    id?: string
    date: Date | string
    workTasks: string
    personalTasks: string
    notes: string
    timeSpent: string
  }

  export type QtaskUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    workTasks: string
    personalTasks: string
    notes: string
    timeSpent: string
  }

  export type QtaskCreateOrConnectWithoutUserInput = {
    where: QtaskWhereUniqueInput
    create: XOR<QtaskCreateWithoutUserInput, QtaskUncheckedCreateWithoutUserInput>
  }

  export type QtaskCreateManyUserInputEnvelope = {
    data: QtaskCreateManyUserInput | QtaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FocusSessionCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    timeSpent: number
    completedTasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FocusSessionUncheckedCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    timeSpent: number
    completedTasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FocusSessionCreateOrConnectWithoutUserInput = {
    where: FocusSessionWhereUniqueInput
    create: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput>
  }

  export type FocusSessionCreateManyUserInputEnvelope = {
    data: FocusSessionCreateManyUserInput | FocusSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    created_at?: DateTimeFilter<"Task"> | Date | string
    due_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    priority?: StringFilter<"Task"> | string
    note?: StringNullableFilter<"Task"> | string | null
    reason?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    assigned_to?: StringNullableFilter<"Task"> | string | null
    priority_tags?: JsonNullableFilter<"Task">
    userId?: IntFilter<"Task"> | number
  }

  export type QtaskUpsertWithWhereUniqueWithoutUserInput = {
    where: QtaskWhereUniqueInput
    update: XOR<QtaskUpdateWithoutUserInput, QtaskUncheckedUpdateWithoutUserInput>
    create: XOR<QtaskCreateWithoutUserInput, QtaskUncheckedCreateWithoutUserInput>
  }

  export type QtaskUpdateWithWhereUniqueWithoutUserInput = {
    where: QtaskWhereUniqueInput
    data: XOR<QtaskUpdateWithoutUserInput, QtaskUncheckedUpdateWithoutUserInput>
  }

  export type QtaskUpdateManyWithWhereWithoutUserInput = {
    where: QtaskScalarWhereInput
    data: XOR<QtaskUpdateManyMutationInput, QtaskUncheckedUpdateManyWithoutUserInput>
  }

  export type QtaskScalarWhereInput = {
    AND?: QtaskScalarWhereInput | QtaskScalarWhereInput[]
    OR?: QtaskScalarWhereInput[]
    NOT?: QtaskScalarWhereInput | QtaskScalarWhereInput[]
    id?: StringFilter<"Qtask"> | string
    date?: DateTimeFilter<"Qtask"> | Date | string
    workTasks?: StringFilter<"Qtask"> | string
    personalTasks?: StringFilter<"Qtask"> | string
    notes?: StringFilter<"Qtask"> | string
    timeSpent?: StringFilter<"Qtask"> | string
    userId?: IntFilter<"Qtask"> | number
  }

  export type FocusSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: FocusSessionWhereUniqueInput
    update: XOR<FocusSessionUpdateWithoutUserInput, FocusSessionUncheckedUpdateWithoutUserInput>
    create: XOR<FocusSessionCreateWithoutUserInput, FocusSessionUncheckedCreateWithoutUserInput>
  }

  export type FocusSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: FocusSessionWhereUniqueInput
    data: XOR<FocusSessionUpdateWithoutUserInput, FocusSessionUncheckedUpdateWithoutUserInput>
  }

  export type FocusSessionUpdateManyWithWhereWithoutUserInput = {
    where: FocusSessionScalarWhereInput
    data: XOR<FocusSessionUpdateManyMutationInput, FocusSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type FocusSessionScalarWhereInput = {
    AND?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
    OR?: FocusSessionScalarWhereInput[]
    NOT?: FocusSessionScalarWhereInput | FocusSessionScalarWhereInput[]
    id?: StringFilter<"FocusSession"> | string
    startTime?: DateTimeFilter<"FocusSession"> | Date | string
    endTime?: DateTimeFilter<"FocusSession"> | Date | string
    timeSpent?: IntFilter<"FocusSession"> | number
    completedTasks?: JsonFilter<"FocusSession">
    createdAt?: DateTimeFilter<"FocusSession"> | Date | string
    taskChanges?: JsonNullableFilter<"FocusSession">
    userId?: IntFilter<"FocusSession"> | number
  }

  export type UserCreateWithoutTasksInput = {
    name: string
    email: string
    picture: string
    qtasks?: QtaskCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    email: string
    picture: string
    qtasks?: QtaskUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    qtasks?: QtaskUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    qtasks?: QtaskUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutQtasksInput = {
    name: string
    email: string
    picture: string
    tasks?: TaskCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQtasksInput = {
    id?: number
    name: string
    email: string
    picture: string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    focusSessions?: FocusSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQtasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQtasksInput, UserUncheckedCreateWithoutQtasksInput>
  }

  export type UserUpsertWithoutQtasksInput = {
    update: XOR<UserUpdateWithoutQtasksInput, UserUncheckedUpdateWithoutQtasksInput>
    create: XOR<UserCreateWithoutQtasksInput, UserUncheckedCreateWithoutQtasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQtasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQtasksInput, UserUncheckedUpdateWithoutQtasksInput>
  }

  export type UserUpdateWithoutQtasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQtasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    focusSessions?: FocusSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFocusSessionsInput = {
    name: string
    email: string
    picture: string
    tasks?: TaskCreateNestedManyWithoutUserInput
    qtasks?: QtaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFocusSessionsInput = {
    id?: number
    name: string
    email: string
    picture: string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    qtasks?: QtaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFocusSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFocusSessionsInput, UserUncheckedCreateWithoutFocusSessionsInput>
  }

  export type UserUpsertWithoutFocusSessionsInput = {
    update: XOR<UserUpdateWithoutFocusSessionsInput, UserUncheckedUpdateWithoutFocusSessionsInput>
    create: XOR<UserCreateWithoutFocusSessionsInput, UserUncheckedCreateWithoutFocusSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFocusSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFocusSessionsInput, UserUncheckedUpdateWithoutFocusSessionsInput>
  }

  export type UserUpdateWithoutFocusSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    qtasks?: QtaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFocusSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    picture?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    qtasks?: QtaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateManyUserInput = {
    id?: string
    title: string
    created_at?: Date | string
    due_date?: Date | string | null
    priority: string
    note?: string | null
    reason?: string | null
    status: string
    assigned_to?: string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QtaskCreateManyUserInput = {
    id?: string
    date: Date | string
    workTasks: string
    personalTasks: string
    notes: string
    timeSpent: string
  }

  export type FocusSessionCreateManyUserInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    timeSpent: number
    completedTasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    priority?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    priority_tags?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QtaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: StringFieldUpdateOperationsInput | string
    personalTasks?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    timeSpent?: StringFieldUpdateOperationsInput | string
  }

  export type QtaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: StringFieldUpdateOperationsInput | string
    personalTasks?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    timeSpent?: StringFieldUpdateOperationsInput | string
  }

  export type QtaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workTasks?: StringFieldUpdateOperationsInput | string
    personalTasks?: StringFieldUpdateOperationsInput | string
    notes?: StringFieldUpdateOperationsInput | string
    timeSpent?: StringFieldUpdateOperationsInput | string
  }

  export type FocusSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSpent?: IntFieldUpdateOperationsInput | number
    completedTasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FocusSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSpent?: IntFieldUpdateOperationsInput | number
    completedTasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FocusSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSpent?: IntFieldUpdateOperationsInput | number
    completedTasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskChanges?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}