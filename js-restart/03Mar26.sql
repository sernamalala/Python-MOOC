--Show all vendors only
SELECT
    *
FROM
    OCRD O1
WHERE
    O1."CardType" = 'S'
    --Show customers updated today
SELECT
    *
FROM
    OCRD O2
WHERE
    O2."CardType" = 'C'
    AND O2."UpdateDate" = convert(date, GETDATE ())
    --Show BPs where CreditLine > 10000
SELECT
    *
FROM
    OCRD O3
WHERE
    O3."CreditLine" > 10000
    --Task: “Show BP + the user who last updated it”
SELECT
    O4."CardCode",
    O4."CardName",
    O4."UpdateDate",
    O5."U_NAME"
FROM
    OCRD O4
    LEFT JOIN OUSR O5 ON O4."UserSign2" = O5."USERID"
WHERE
    O4."CardType" <> 'L'
ORDER BY
    O4."UpdateDate" DESC