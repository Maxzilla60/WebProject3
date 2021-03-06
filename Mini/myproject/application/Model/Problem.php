<?php

namespace Mini\Model;

class Problem
{
    private $id;
    private $location_id;
    private $description;
    private $date;
    private $fixed;
    private $technician;

    public function __construct($id, $location_id, $description, $date, $fixed, $technician)
    {
        $this->id = $id;
        $this->location_id = $location_id;
        $this->description = $description;
        $this->date = $date;
        $this->fixed = $fixed;
        $this->technician = $technician;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getLocationId()
    {
        return $this->location_id;
    }

    public function setLocationId($location_id)
    {
        $this->location_id = $location_id;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function setDate($date)
    {
        $this->date = $date;
    }

    public function getFixed()
    {
        return $this->fixed;
    }

    public function setFixed($fixed)
    {
        $this->fixed = $fixed;
    }

    public function getTechnician()
    {
        return $this->technician;
    }

    public function setTechnician($technician)
    {
        $this->technician = $technician;
    }
}
