package com.example.demo.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.document.Property;
import com.example.demo.repo.PropertyRepo;

@Service
public class PropertyService {

		@Autowired
		PropertyRepo propertyRepo;
		
		public Property setProperty(Property property) {
			for(Property prop : propertyRepo.findAll())
			if(property.getLocation().getStreetAddress().equals(prop.getLocation().getStreetAddress())) {
				return new Property();
			}
			return propertyRepo.save(property);
		}
	
		public List<Property> getProperties(){
			if(propertyRepo.findAll().isEmpty()) {
				return null;
			}
			else {
				return propertyRepo.findAll();
			}
			
		}
		
		public Property getPropertiesById(String propertyId){
			Optional<Property> property = propertyRepo.findById(propertyId);
			if(property.isPresent()) {
				return property.get();
			}
			else
			{
				return new Property();
			}
		}
		
		public List<Property> getPropertiesByType(String propertyType){
			if(propertyRepo.findByType(propertyType).isEmpty()) {
				return null;
			}
			else
			{
				return propertyRepo.findByType(propertyType);
			}
		}
		
		
		public List<Property> getPropertiesByTitle(String propertyTitle, String propertyType){
			if(propertyRepo.findByTitle(propertyTitle).isEmpty()) {
				return new ArrayList();
			}
			else
			{
				List<Property> property = new ArrayList();
				
				for(Property property1: propertyRepo.findByTitle(propertyTitle)) {
					if(property1.getType().equals(propertyType)) {
						property.add(property1);
					}
				}
				if(property.isEmpty() &&  propertyType.equals("")) {
				return propertyRepo.findByTitle(propertyTitle);
				}else {
					return property;
				}
			}
		}
		
		public List<Property> getPropertiesByBestseller(boolean bestseller){
			if(propertyRepo.findByBestseller(bestseller).isEmpty()){
				return null;
			}
			else {
				return propertyRepo.findByBestseller(bestseller);
			}
		}

		public Property updateProperty(Property property, String id) {
			if(propertyRepo.findById(id).isPresent()) {
				property.setId(id);
				return propertyRepo.save(property);
			}
			else {
				return new Property();
			}
		}
		public String deleteProperty(String id) {
			if(propertyRepo.findById(id).isPresent()) {
				propertyRepo.deleteById(id);
				return "deleted";
			}else {
				return "not found";
			}
			
		}
}
