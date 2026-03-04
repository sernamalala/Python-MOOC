--04 March
--Exercise 1 -- Return CardCode, CardName from OCRD where CardType = 'C'
SELECT
    T0."CardCode",
    T0."CardName"
FROM
    OCRD T0
WHERE
    T0."CardType" = 'C'
    --Exercise 2 -- Return CardCode, CardName where CardType = 'S'
SELECT
    T0."CardCode",
    T0."CardName"
FROM
    OCRD T0
WHERE
    T0."CardType" = 'S'
    --Exercise 3 --Return CardCode, CardName, UpdateDate for all BPs where CardType <> 'L' Order by UpdateDate desc
SELECT
    T0."CardCode",
    T0."CardName",
    T0."UpdateDate"
FROM
    OCRD T0
WHERE
    T0."CardType" <> 'L'
ORDER BY
    T0."UpdateDate" DESC
    --Exercise 4 --Return the Top 5 most recently updated BPs (same fields as Exercise 3)
SELECT
    TOP 5 T0."CardCode",
    T0."CardName",
    T0."UpdateDate"
FROM
    OCRD T0
ORDER BY
    T0."UpdateDate" DESC