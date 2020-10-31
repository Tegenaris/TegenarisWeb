<?php
include_once('../src/triangle.php');
use PHPUnit\Framework\TestCase;

class TriangleTest extends TestCase
{
    public function testCalculatesTriangleField(): void
    {
        $element = Triangle::CalculateTriangle(3,4);
        $this->assertEquals($element, 6);
    }
}