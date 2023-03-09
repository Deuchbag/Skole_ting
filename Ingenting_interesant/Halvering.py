from math import *

a = 0     #startverdi
b = 1     #startverdi

noyaktighet = 0.0001   #angir hvor nøyaktig vi skal være

m = (a+b)/2   #gir oss verdien for midtpunktet i vårt første intervall

def f(x):   #definerer funksjonen
  return x**3+x-1

while abs(f(m)) >= noyaktighet:  #Viser oss prosessen i å finne vårt neste intervall
  if f(a)*f(m) < 0:
    b = m
  else:
    a = m
    
  m = (a+b)/2
  
print("løsningen på ikningen er tilnærmet lik", round(m,4))