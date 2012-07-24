// Load functional
 var F = require('functional-node').load()


// I
 assertEquals(1, F.I(1))


// flip
 assertEquals(2, ('a/b'.lambda()).flip()(1,2))


// uncurry
 assertEquals(0.5, ('a -> b -> a/b'.lambda()).uncurry()(1,2))


// saturate
 assertEquals(4, Math.max.curry(1, 2)(3, 4))
 assertEquals(2, Math.max.saturate(1, 2)(3, 4))
 assertEquals(2, Math.max.curry(1, 2).saturate()(3, 4))


// Functional
 assertEquals(2, F.flip('a/b')(1, 2))
 assertEquals(0.5, F.curry('a/b', 1)(2))


// install
 F.install()


// compose
 assertEquals(5, compose('1+', '2*')(2))


// sequence
 assertEquals(6, sequence('1+', '2*')(2))


// reduce
 assertEquals(10, reduce('x y -> 2*x+y', 0, [1,0,1,0]))


// select
 assertEquals([1, 3], select('%2', [1,2,3,4]))


// foldr
 assertEquals(104, foldr('x y -> 2*x+y', 100, [1,0,1,0]))


// some
 assertEquals(true, some('>2', [1,2,3]))
 assertEquals(false, some('>10', [1,2,3]))


// every
 assertEquals(false, every('<2', [1,2,3]))
 assertEquals(true, every('<10', [1,2,3]))


// not
 assertEquals(false, not(F.K(true))())
 assertEquals(true, not(F.K(false))())


// invoke
 assertEquals("123", invoke('toString')(123))


// pluck
 assertEquals(3, pluck('length')("abc"))


// until
 assertEquals(16, until('>10', '2*')(1))


// zip
 assertEquals([[1, 3], [2, 4]], zip.apply(null, [[1,2],[3,4]]))


// lambda
 assertEquals(2, 'x -> x + 1'.lambda()(1))
 assertEquals(5, 'x y -> x + 2*y'.lambda()(1, 2))
 assertEquals(5, 'x, y -> x + 2*y'.lambda()(1, 2)) 
 assertEquals(2, '_ + 1'.lambda()(1)) 
 assertEquals(2, '/2'.lambda()(4))
 assertEquals(0.5, '2/'.lambda()(4))
 assertEquals(0.5, '/'.lambda()(2,4)) 
 assertEquals(2, 'x + 1'.lambda()(1))
 assertEquals(5, 'x + 2*y'.lambda()(1, 2))
 assertEquals(5, 'y + 2*x'.lambda()(1, 2)) 
 assertEquals(5, 'x -> y -> x + 2*y'.lambda()(1)(2))


// apply
 assertEquals(3, 'x+1'.apply(null, [2]))
 assertEquals(0.5, '/'.apply(null, [2, 4]))


// call
 assertEquals(3, 'x+1'.call(null, 2))
 assertEquals(0.5, '/'.call(null, 2, 4))

