SELECT 
    T0.[CardCode],
    T0.[CardName],
    T0.[Balance],
    T0.[Phone1],
    T0.[IntrntSite] 
FROM OCRD T0  
INNER JOIN OCRG T1
ON T0.GroupCode = T1.GroupCode