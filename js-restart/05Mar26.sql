-- Exercise 8
SELECT
    T0."CardCode",
    T0."CardName",
    T0."UpdateDate",
    T1."U_NAME"
FROM
    OCRD T0
    INNER JOIN OUSR T1 ON T0."UserSign2" = T1."USERID"
WHERE
    T0."CardType" = 'C'
ORDER BY
    T0."UpdateDate" DESC
    -- Exercise 9
SELECT
    T0."CardCode",
    T0."CardName",
    T3."PymntGroup" as 'Payment Term Name',
    T0."UpdateDate",
    T1."U_NAME"
FROM
    OCRD T0
    INNER JOIN OUSR T1 ON T0."UserSign2" = T1."USERID"
    INNER JOIN OCTG T3 ON T0."GroupNum" = T3."GroupNum"
WHERE
    T0."CardType" = 'C'
ORDER BY
    T0."CardName"
    -- Exercise 10 --Show how many Customers are in each Payment Term.
SELECT
    T1."PymntGroup" AS 'Payment Term Name',
    COUNT(T0."CardName") AS 'CustomerCount'
FROM
    OCRD T0
    INNER JOIN OCTG T1 ON T0."GroupNum" = T1."GroupNum"
WHERE
    T0."CardType" = 'C'
GROUP BY
    T1."PymntGroup"
ORDER BY
    'CustomerCount' DESC
    -- Exercise 11 -- same as Ex 10 but for Vendors instead of Customers.
SELECT
    T1."PymntGroup" AS 'Payment Term Name',
    COUNT(T0."CardCode") AS 'VendorCount'
FROM
    OCRD T0
    INNER JOIN OCTG T1 ON T0."GroupNum" = T1."GroupNum"
WHERE
    T0."CardType" = 'S'
GROUP BY
    T1."PymntGroup"
ORDER BY
    VendorCount DESC