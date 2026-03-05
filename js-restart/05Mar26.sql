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