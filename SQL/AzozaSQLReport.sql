--the parameters "@" are used for user input, but not all will necessarily will be inputted by the user

ALTER PROCEDURE "SEI_GL_ICE_CHECK" @glAccount VARCHAR(15), @startDate DATE, @endDate DATE
	AS
	-- A Common Table Expression (CTE) 
	-- JNL CTE used to get information from the journal

WITH "JNL" AS
(

	SELECT
		J."RefDate" AS "Posting Date",
		J."TransId" AS "Transaction Number",
		J."Account" AS "Account Number",
		J."TransType" AS "Transaction Types",
		J."LineMemo" AS "Transaction Information",

	CASE 
		WHEN J."TransType" = 13 THEN 'INV'
		WHEN J."TransType" = 1 THEN 'GL'
		WHEN J."TransType" = 2 THEN 'BP'
		WHEN J."TransType" = 4 THEN 'ITM'
		WHEN J."TransType" = 13 THEN 'INV'
		ELSE 'UNK' END AS "Origin of Document"

	FROM "JDT1" J
	WHERE J."Account" = @glAccount
		AND (J."RefDate" >= @startDate AND J."RefDate" <= @endDate)
)

-- Call the above CTE
SELECT * FROM "JNL"

